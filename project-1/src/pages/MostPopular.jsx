import React from 'react'
import Navbar from '../components/Navbar'
import MostPop from '../components/Mostpop.jsx'
import Prods from '../products/Prods.js'
import Footer from '../components/Footer'

const MostPopular = () => {
  return (
    <div>
        <Navbar/>
        <MostPop Prods={Prods}/>
        <Footer/>
    </div>
  )
}

export default MostPopular
