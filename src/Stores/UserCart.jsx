

import React from 'react'
import { useCart } from './Context/CartContect'
import Navbar from './Components/Navbar'

const UserCart = () => {

    const {cartItems, addToCart,removeFromCart} = useCart()
    console.log(cartItems)

  return (
    <>
    <Navbar/>
    <div>
        
        {cartItems.map((item)=>{
          return(
              <div className="cart-section">
                  <div className="cart-img">
                      <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details">
                      <h3>{item.product}</h3>
                      <h2>{item.price}</h2>
                      <h3>{item.model}</h3>
                      
                  </div>
                  <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
              </div>
          )
        })}
      </div>
    </>
  )
}

export default UserCart



