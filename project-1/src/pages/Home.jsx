import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Section from '../components/Section.jsx'
import Aboutsec from '../components/Aboutsec.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import ImgtitleCard from '../components/ImgtitleCard.jsx'
import imgTitle from '../products/imgTitle.js'
import NewArr from '../components/NewArri.jsx'
import Prods from '../products/Prods.js'
import MostPop from '../components/Mostpop.jsx'
import CustomerReview from '../components/CustomerReview.jsx'
import customerReviews from '../products/customerReviewsArr.js'
const Home = () => {

  return (
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 4, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.9 }}
    >
        <Navbar />
        <Header />
        <ImgtitleCard imgTitles={imgTitle}/>
        <NewArr Prods={Prods}/>
        <Section/>
        <MostPop Prods={Prods}/>
        <Aboutsec/>
        <CustomerReview customerReviews={customerReviews}/>
        <Contact/>
        <Footer/>
    </motion.div>
  )
}

export default Home
