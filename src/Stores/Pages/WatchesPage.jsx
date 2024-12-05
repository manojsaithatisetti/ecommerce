
import React, { useState } from 'react'

import { watchData } from '../data/watch'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const WatchesPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler=(mango)=>{
    if (selectedProduct.includes(mango)){
      setSelectedProduct(selectedProduct.filter(item => item !== mango))
    }else{
      setSelectedProduct([...selectedProduct,mango])
    }
  }

  const filteredProduct = selectedProduct.length===0?
  watchData : watchData.filter((orange)=>selectedProduct.includes(orange.brand))

    return (
        <>
   <Navbar/>
     <div className="fullpage">
     <div className="pro-selected">
      {watchData.map((watch)=>{
        return(
          <div className='pro-input'>
            <label >
              <input type="checkbox"
              checked={selectedProduct.includes(watch.brand)}
              onChange={()=>companyHandler(watch.brand)} />
              {watch.brand}
            </label>
          </div>
        )
      })}
     </div>
    <div className='pageSection'>
    {filteredProduct.map((item) => {
  return (
    <div key={item.id}>
      <Link to={`/watche/${item.id}`}>
        <div className="pageImg">
          <img src={item.image} alt="" />
        </div>
      </Link>
      <div className="proModel">
        {item.brand}, {item.model}
      </div>
    </div>
  );
})}

    </div>
     </div>
   </>
       
       )
}

export default WatchesPage
