import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {

  const cartItems = useSelector(state=>state.cart.cartItems)
  // console.log(cartItems)
  const res = cartItems.reduce((previousValue, currentValue)=>previousValue + currentValue.cartTotalQuantity,0)



  // console.log(res)
  return (
    <div className="menu">
      <div className="container">
        <nav>
          <ul className="menu_wrap">
            <li>
              <Link to="/cart">
              <div>Cart </div>
                {/* <span>{res}</span> */}
                <span>{cartItems.length}</span>
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
