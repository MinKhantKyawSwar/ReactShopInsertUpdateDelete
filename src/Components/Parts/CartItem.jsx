import React, { useContext } from 'react'
import "../../index.css"
import { ItemContext } from '../Store/ItemContext'

const Cart = ({laptop}) => {
    const {addItem, removeItem} = useContext(ItemContext)
    const addAmountHandler = () => {
        addItem({...laptop, amount : 1})
    }
    const removeAmountHandler = () => {
        removeItem(laptop.id)
    }
  return (
    <section className='cart'>
        <div className='card'>
            <div className='left-card-div'>
                <p className='card-name'>{laptop.name}</p>
                <p className='card-price'>$ {laptop.price}</p>
            </div>
            <div className='right-card-div'>
                <p className='amount-showcase'>x<span>{laptop.amount}</span></p>
                <div className='amount-button'>
                    <button className='plus-button' onClick={addAmountHandler}>+</button>
                    <button className='minus-button' onClick={removeAmountHandler}>-</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart