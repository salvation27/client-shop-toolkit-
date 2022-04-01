import React from 'react'
import { Button} from '@mui/material';
import QuantityBtn from './QuantityBtn';

const CartItem = ({item,del,inc,decrement}) => {

  return (
    <div className='cart_item_wrap' style={{border:'1px solid #ccc',marginBottom:'20px'}}>
      <div className="cart_item_text">
        <div className="cart_item_title"><h1>{item.name}</h1></div>
        <div className="cart_item_cat" style={{color:'green',fontWeight: 'bold'}}>category:  {item.cat}</div>
        <Button onClick={()=>del(item)} variant="contained" color="error">Delete</Button>
      </div>
      <div className="cart_item_price">
       {item.price} ua.
      </div>
      <div className="cart_item_quantity">
     <QuantityBtn decrement={decrement} item={item} inc={inc} num={item.cartTotalQuantity} />
      </div>
      <div className="cart_item_total">
          Total: {item.price * item.cartTotalQuantity}
      </div>
    </div>
  )
}

export default CartItem