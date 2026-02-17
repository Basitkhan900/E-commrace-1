import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
const Sitting = () => {
    const [ selectaddress, setSelectaddress ] = useState("")

    const Navigate = useNavigate()
  return (
    <div>
        <Navbar/>
      <div>
        <h1 className='font-bold text-2xl uppercase text-center mt-[200px]'>Setting</h1>
      </div>

         <h3 className='font-bold ml-[80px] mt-[50px]'>My Address</h3>
         <div>
        <div className='mt-3 ml-16'>            
         <div className='w-[400px] h-auto bg-amber-100 rounded-3xl p-6 mt-3'> 
          <input
          type="radio"
          name="address"
          value='address1'
          checked={selectaddress === 'address1'}
          onChange={(e) => setSelectaddress(e.target.value)}
          className='pt-4'/> <span className='font-bold '>Basit Bangash</span>
          <p className='pl-3'>+(92) 45665757</p>
          <p>Hello this is my first Address</p>

        <div className='mt-4'>
          <input 
           type="radio"
            name="address"
          value='address2'
          checked={selectaddress === 'address2'}
          onChange={(e) => setSelectaddress(e.target.value)}
           className='pt-4 ' /> <span className='font-bold '>Ahmed Khan</span>
          <p className='pl-3'>+(92) 45663242</p>
          <p>Hello this is my second Address</p>
          </div>
         </div>
      </div>
    </div>
    <p
    onClick={() => {Navigate('/another-address')}}
    className='ml-16 mt-4 text-amber-400 hover:underline cursor-pointer'>+ Add another Address</p>

    <Footer/>
    </div>
  )
}

export default Sitting
