import React from 'react'
import Navbar from '../components/Navbar'
import NewArr from '../components/NewArri.jsx'
import Prods from '../products/Prods.js'
import Footer from '../components/Footer'
const NewArrival = () => {
  return (
    <div>
        <Navbar/>
        <NewArr Prods={Prods}/>
        <Footer/>
    </div>
  )
}

export default NewArrival
