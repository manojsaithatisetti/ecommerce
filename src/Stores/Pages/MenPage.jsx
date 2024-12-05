

import React, { useState } from 'react'
import { menData } from '../data/men'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

const MenPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler=(mango)=>{
    if (selectedProduct.includes(mango)){
      setSelectedProduct(selectedProduct.filter(item => item !== mango))
    }else{
      setSelectedProduct([...selectedProduct,mango])
    }
  }

  const filteredProduct = selectedProduct.length===0?
  menData : menData.filter((orange)=>selectedProduct.includes(orange.brand))

  return (
   <>
   <Navbar/>
     <div className="fullpage">
     <div className="pro-selected">
      {menData.map((shirt)=>{
        return(
          <div className='pro-input'>
            <label >
              <input type="checkbox"
              checked={selectedProduct.includes(shirt.brand)}
              onChange={()=>companyHandler(shirt.brand)} />
              {shirt.brand}
            </label>
          </div>
        )
      })}
     </div>
    <div className='pageSection'>
    {filteredProduct.map((item) => {
  return (
    <div key={item.id}>
      <Link to={`/men fashion/${item.id}`}>
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


export default MenPage
