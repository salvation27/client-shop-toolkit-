import React,{useEffect} from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { toast } from "react-toastify";
import CartItem from "./CartItem";
import { Button} from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllProduct,removeProduct,decrementQuantity,addCart, getTotalCart } from "../../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.cartTotalAmount);
  
  useEffect(()=>{
    dispatch(getTotalCart())
  },[cartItems,dispatch])



  const delCartProductHandel = (item) => {
     dispatch(removeProduct(item))
  }


  const clerCartHandel = () => {
     dispatch(removeAllProduct())
  }

  const incQuantityHandel = (item) => {
     dispatch(addCart(item))
  }

 const decrementQuantityHandel = (item) => {
     dispatch(decrementQuantity(item))
  }

  return (
    <div className="cart">
      <div className="container">
        <div className="cart_wrap">
          <div className="cart_title">
            <h2>Cart</h2>
          </div>
          <div className="cart_items_wrap">
          {
            cartItems.length > 0 ? cartItems.map(item=> <CartItem decrement={decrementQuantityHandel} inc={incQuantityHandel}  del={delCartProductHandel} key={item.id} item={item} />)  : 'корзина пуста'
          }
          </div>
          <hr />
          <div className="cart_total_block">
          <div className="cart_total_block_btn_cler">
          <Button onClick={()=>clerCartHandel()} variant="outlined" color="error">Cler All</Button>
          </div>
          <div className="cart_total_block_btn_chec">
           <div style={{marginBottom:'20px'}}><h2><span style={{fontSize:'16px'}}>Total:</span>{total}</h2></div>
           <Button onClick={()=>null} variant="contained" color="error" style={{display:'block'}}>Chec out</Button>
           <Button onClick={()=>null}  color="error" style={{display:'block'}}><Link to='/'>Continue shoping</Link></Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
