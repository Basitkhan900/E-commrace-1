import React from 'react'
import { CiSearch } from "react-icons/ci";
import { motion } from 'framer-motion';

const Search = ({onclose}) => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition={{ duration: 0.8 }}

    className='w-full bg-white py-8 flex justify-center relative z-10'>
      <div className=' w-[60%] relative'>
        <input 
        type="search"
        placeholder='Search Here For Products'
        className='w-full rounded-full border border-b-gray-600 py-3 pl-8 pr-3 outline-none'
        />
      </div>
     <span>
        <CiSearch size={22} className='absolute bottom-11 left-78'/>
     </span>
    </motion.div>
  )
}

export default Search
