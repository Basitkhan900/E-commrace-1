import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductsData from '../components/ProductsData'
import Prods from '../products/Prods'

const Products = () => {
  return (
    <div>
        <Navbar/>
        <ProductsData Prods={Prods}/>
        <Footer/>
    </div>
  )
}

export default Products
