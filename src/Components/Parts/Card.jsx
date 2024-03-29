import React, { useContext, useState } from 'react'
import "../../index.css"
import {ItemContext} from '../Store/ItemContext';

const Card = ({laptop}) => {
  const {id, name, price, description} = laptop;
  const {addItem} = useContext(ItemContext);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountDigit = +currentAmount;

  const addToCartHandler = () => {
    addItem({
      id,
      name,
      price,
      amount : currentAmountDigit,
    })
  }

  return (
    <div className='card'>
        <div className='left-card-div'>
            <p className='card-name'>{name}</p>
            <p className='card-price'>$ {price}</p>
            <p className='card-description'>{description}</p>
        </div>
        <div className='right-card-div'>
            <input type="number" className='card-amount' min={1} max={5} value={currentAmount} onChange={(e)=> {setCurrentAmount(e.target.value)}}/>
            <button className='card-button' onClick={addToCartHandler} >+ Add</button>
        </div>
    </div>
  )
}

export default Card