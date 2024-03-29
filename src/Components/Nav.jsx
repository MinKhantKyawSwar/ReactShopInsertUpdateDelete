import React, { useContext } from 'react'
import '../index.css'
import { ItemContext } from './Store/ItemContext';

const Nav = (props) => {
  const {items} = useContext(ItemContext)
  const totalCart = items.reduce((currentVal,item)=>{
    return currentVal + item.amount
  },0);
  return (
    <>
      <section className='nav-bar'>
        <h2>React Shop</h2>
        <button className='cart-button' onClick={props.showCartHandler}>Cart ({totalCart})</button>
      </section>
    </>
  )
}

export default Nav