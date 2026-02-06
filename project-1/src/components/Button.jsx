import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='bg-amber-400 w-[200px] h-12 rounded-3xl mt-4 font-bold text-white hover:cursor-pointer transition-transform duration-300 hover:scale-105'>
        {title}
      </button>
    </div>
  )
}

export default Button
