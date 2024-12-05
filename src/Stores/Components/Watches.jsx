


import React from 'react'

import { watchData } from '../data/watch'

const Watches = () => {
    const firstFiveImages = watchData.slice(0,5) 
  return (
   <>
    <h2>Watchs</h2>
    <div className='proSection'>
        {
           firstFiveImages.map((item)=>{
               return(
                <div className='imgBox'>
                    <img className='proimage' src={item.image} alt="" />
                </div>
               )
            })
        }
      
    </div>
   </>
  )
}

export default Watches
