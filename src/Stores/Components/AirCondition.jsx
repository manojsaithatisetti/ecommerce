

import React from 'react'
import { acData } from '../data/ac'

const AirCondition = () => {

    const firstFiveImages = acData.slice(0,5)
  return (
    <>
    <h2>Air Conditions</h2>
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

export default AirCondition
