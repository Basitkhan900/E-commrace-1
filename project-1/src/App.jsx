import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Favorate from './pages/Favorate.jsx'
import NewArrival from './pages/NewArrival.jsx'
import MostPopular from './pages/MostPopular.jsx'
import About from './pages/About.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Cart from './components/Cart.jsx'
import Checkout from './components/Checkout.jsx'
import Profile from './components/Profile.jsx'
import Changepassword from './components/Changepassword.jsx'
import Sitting from './components/Sitting.jsx'
import Addanotheradd from './components/Addanotheradd.jsx'
import Login from './components/Login.jsx'

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Products' element={<Products/>}/>
        <Route path='/Favorate' element={<Favorate/>}/>
        <Route path='/NewArrival' element={<NewArrival/>}/>
        <Route path='/MostPopular' element={<MostPopular/>}/>
        <Route path='/About' element={<About/>}/> 
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout Page/>}/>
        <Route path='/profile' element={<Profile/>} />
        <Route path='/changepassword' element={<Changepassword/>}/>
        <Route path='/sittings' element={<Sitting/>}/>
        <Route path='/another-address' element={<Addanotheradd/>}/>
        <Route path='/login' element={< Login/>}/>
    </Routes>
    </>
  )
}

export default App
