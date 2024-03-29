import React, { useState } from 'react'
import Nav from './Components/Nav'
import Body from './Components/Body'
import Backdrop from './Components/Backdrop'
import Summary from './Components/Parts/Summary'

const Main = () => {
    const [showBackdrop,setShowBackdrop] = useState(false);

    const showCartHandler = () => {
      setShowBackdrop(true);
    }

    const hideCartHandler = () => {
      setShowBackdrop(false);
    }

  return (
    <>
        <Nav showCartHandler={showCartHandler}/>
        <Summary />
        <Body />
        <Backdrop showBackdrop ={showBackdrop} hideCartHandler = {hideCartHandler}/>
    </>
  )
}

export default Main