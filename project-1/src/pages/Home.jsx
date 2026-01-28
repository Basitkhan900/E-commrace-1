import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Cards from '../components/Cards.jsx'
import Newarrivaldata from '../components/Newarrivaldata.jsx'
import Section from '../components/Section.jsx'
import { HiMenuAlt1 } from 'react-icons/hi'
import Aboutsec from '../components/Aboutsec.jsx'
import CustomerRecards from '../components/CustomerRecards.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {

  return (
    <div>
        <Navbar />
        <Header />
        <Cards/>
        <Newarrivaldata/>
        <Section/>
        <Newarrivaldata />
        <Aboutsec/>
        <CustomerRecards/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home
