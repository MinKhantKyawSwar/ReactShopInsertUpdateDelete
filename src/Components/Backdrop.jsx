import React from 'react'
import "../index.css"
import Cart from './Parts/Cart'


const Backdrop = (props) => {
  return (
    <>
    {
      props.showBackdrop && (
      <>
      <section className='backdrop' onClick={props.hideCartHandler} />
        <Cart hideCartHandler={props.hideCartHandler}/>
      </>)
    }
    
    </>
    
  )
}

export default Backdrop