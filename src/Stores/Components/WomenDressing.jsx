

import React from 'react'

import { womanData } from '../data/woman'

const WomenDressing = () => {

    const firstFiveImages = womanData.slice(0,5)
  return (
    <>
    <h2>Woman Dressing</h2>
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

export default WomenDressing
