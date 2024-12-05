

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LandingPage from './Stores/Pages/LandingPage'
import Kitchen from './Stores/Components/Kitchen'
import MobilePage from './Stores/Pages/MobilePage'
import ComputerPage from './Stores/Pages/ComputerPage'
import WatchesPage from './Stores/Pages/WatchesPage'
import MenPage from './Stores/Pages/MenPage'
import WomenPage from './Stores/Pages/WomenPage'
import Furniture from './Stores/Pages/Furniture'
import ACPage from './Stores/Pages/ACPage'
import ComputerSingle from './singles/ComputerSingle'
import BookPage from './Stores/Pages/BookPage'
import FridgePage from './Stores/Pages/FridgePage'
import KitchenPage from './Stores/Pages/KitchenPage'
import SpeakerPage from './Stores/Pages/SpeakerPage'
import TvPage from './Stores/Pages/TvPage'
import MobileSingle from './singles/MobileSingle';
import WatcheSingle from './singles/WatcheSingle'
import MenSingle from './singles/MenSingle'
import WomenSingle from './singles/WomenSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import AcSingle from './singles/AcSingle'
import FridgeSingle from './singles/FridgeSingle'
import KitchenSingle from './singles/Kitchensingle'
import UserCart from './Stores/UserCart'
// import SpeakerSingle from './singles/SpeakerSingle'



const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element = { <LandingPage/>}/>
      <Route path='/abc' element = { <Kitchen/>}/>
      <Route path='/Mobiles' element = { <MobilePage/>}/>
      <Route path='/Computers' element = { <ComputerPage/>}/>
      <Route path='/Watches' element = { <WatchesPage/>}/>
      <Route path='/MenFashion' element = { <MenPage/>}/>
      <Route path='/WomenDressing' element = { <WomenPage/>}/>
      <Route path='/Furniture' element = { <Furniture/>}/>
      <Route path='/AC' element = { <ACPage/>}/>
      <Route path='/Books' element = { <BookPage/>}/>
      <Route path='/Fridge' element = { <FridgePage/>}/>
      <Route path='/Kitchen' element = { <KitchenPage/>}/>
      <Route path='/Speaker' element = { <SpeakerPage/>}/>
      <Route path="/TV's" element = { <TvPage/>}/>

      <Route path="/mobiles/:id" element={<MobileSingle />} /> 
      <Route path="/computers/:id" element={<ComputerSingle />} />  
      <Route path="/Watche/:id" element={<WatcheSingle />} /> 
      <Route path="/men fashion/:id" element={<MenSingle />} /> 
      <Route path="/women dressing/:id" element={<WomenSingle/>} />
      <Route path="/furniture/:id" element={<FurnitureSingle />} /> 
      <Route path="/ac/:id" element={<AcSingle/>} /> 
      
      <Route path="/fridge/:id" element={<FridgeSingle />} /> 
      <Route path="/kitchen/:id" element={<KitchenSingle />} /> 
      <Route path="/cart" element={<UserCart />} /> 
     
     </Routes>
    </div>
  )
}

export default App
