import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantityAll: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addCart(state, action) {
      // при повторном нажатии добавляет колличество данного товара
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartTotalQuantity += 1;
        toast.info(
          `Колличество ${state.cartItems[itemIndex].name}  увеличено до ${state.cartItems[itemIndex].cartTotalQuantity}`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`Добавлен новый товар в корзину ${action.payload.name}`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeProduct(state, action) {
      const res = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = res;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.success(` ${action.payload.name} удален из корзины`, {
        position: "bottom-left",
      });
    },
    removeAllProduct(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success(` Все товары удалены из корзины`, {
        position: "bottom-left",
      });
    },
    decrementQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartTotalQuantity > 1) {
        state.cartItems[itemIndex].cartTotalQuantity -= 1;
        toast.success(
          `колличество ${state.cartItems[itemIndex].name}  уменьшено на 1  `,
          {
            position: "bottom-left",
          }
        );
      } else if (state.cartItems[itemIndex].cartTotalQuantity === 1) {
        const res = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = res;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

        toast.success(` ${action.payload.name} удален из корзины`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotalCart(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartTotalQuantity } = cartItem;
          const itemTotal = price * cartTotalQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartTotalQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantityAll = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addCart,
  removeAllProduct,
  removeProduct,
  incQuantity,
  decrementQuantity,
  getTotalCart
} = cartSlice.actions;

export default cartSlice.reducer;
