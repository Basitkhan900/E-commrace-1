import React from 'react'
import frm45 from '../assets/images/Frame 45.png'
import frm46 from '../assets/images/Frame 45 (1).png'
import frm47 from '../assets/images/Frame 46.png'
import CustemerCard from './CustemerCard'

const CustomerRecards = () => {
  const customers = [
    {
      id: 1,
      img: frm45,
      title: 'Khan Khan',
      img2: frm47,
      disc:
        "I wasn’t expecting much, but this product went above and beyond what I imagined. The quality and performance are outstanding! It exceeded my expectations in every way.",
    },
    {
      id: 2,
      img: frm46,
      title: 'Basit Bangash',
      img2: frm47,
      disc:
        "I wasn’t expecting much, but this product went above and beyond what I imagined. The quality and performance are outstanding! It exceeded my expectations in every way.",
    },
    {
      id: 3,
      img: frm45,
      title: 'Ali Khan',
      img2: frm47,
      disc:
        "I wasn’t expecting much, but this product went above and beyond what I imagined. The quality and performance are outstanding! It exceeded my expectations in every way.",
    },
  ]

  return (
    <div className="bg-[#fffaf2] py-16 px-4 sm:px-8">
      
      
      <h1 className="text-center font-bold text-2xl sm:text-3xl mb-12">
        CUSTOMER REVIEWS
      </h1>

      
      <div
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {customers.map((item) => (
          <CustemerCard
            key={item.id}
            img={item.img}
            title={item.title}
            img2={item.img2}
            disc={item.disc}
          />
        ))}
      </div>
    </div>
  )
}

export default CustomerRecards
