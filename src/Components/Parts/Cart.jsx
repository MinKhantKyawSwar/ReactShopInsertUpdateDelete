import React, { useContext } from 'react'
import { ItemContext } from '../Store/ItemContext'
import CartItem from "./CartItem"

const Cart = (props) => {
  const {items, totalAmount} = useContext(ItemContext);

  const totalPrice = `$${totalAmount.toFixed(2)}`

  return (
    <section className='cart-box'>
        <h3>My Cart</h3>
        <hr />
        <div className="over-flow-ctr">
          {
            items.length < 1 ?
            (<h1 className='no-item-showcase'>Your Cart is Empty~ </h1>) :
            (items.map(laptop => (
              <CartItem key={laptop.id} laptop = {laptop}/>
            )))
          }
          
        </div>
        <hr />
        <div className='CartTotalAmount'>
            <h4>Total Amount</h4>
            <p className='price-showcase'>{totalPrice}</p>
        </div>
        <div className='cart-buttons'>
            <button className='cancel-button' onClick={props.hideCartHandler}>Cancel</button>
            <button className='order-button' onClick={() => alert("ordered confirmed!")}>Order</button>
        </div>
    </section>
  )
}

export default Cart