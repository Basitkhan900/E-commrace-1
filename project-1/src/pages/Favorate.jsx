import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Fav from '../components/Fav.jsx'
import Prods from '../products/Prods.js'

const Favorate = () => {
  return (
    <div>
        <Navbar/>
        <Fav Prods={Prods} />
        <Footer/>
    </div>
  )
}

export default Favorate
