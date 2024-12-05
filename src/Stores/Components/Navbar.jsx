

import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/CartContect'

const Navbar = () => {

    const {cartItems} = useCart()
      return (
    <>
    <div className="navSection">
        <div className="title">
            <h2>E-mart</h2>
        </div>
        <div className="search">
            <input type="text" placeholder='search...'/>
        </div>
        <div className="user">
            <div className="user-details">
                SinIn/SinUp
            </div>
            <Link to = '/cart'> 
            <div className="cart">Cart
                <span>{cartItems.length}</span> 
                </div>
            </Link>
           
        </div>
    </div>
    <div className="submenu">
        <ul>
            <Link to='/Mobiles'>
            <li>Mobiles</li>
            </Link>  
            <Link to='/Computers'>
            <li>Computers</li></Link>          
            
           <Link to='/Watches'>
           <li>Watches</li></Link> 
           <Link to='/MenFashion'><li>MenFashion</li></Link>  
           <Link to='/WomenDressing'><li>WomenDressing</li></Link>  
           <Link to='/Furniture'><li>Furniture</li></Link>  
           <Link to='/AC'><li>Ac</li></Link> 
           <Link to='/Books'><li>Books</li></Link> 
           <Link to='/Fridge'><li>Fridge</li></Link> 
           <Link to='/Kitchen'><li>Kitchen </li></Link> 
           <Link to='/speaker'><li>speaker</li></Link> 
           <Link to="/TV's"><li>TV's</li></Link> 
           
           
        </ul>
    </div>
    </>
    
  )
}

export default Navbar
