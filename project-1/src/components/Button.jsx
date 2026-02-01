import React from 'react'

const Button = ({title}) => {
  return (
    <div>
      <button className='bg-amber-400 w-[200px] h-12 rounded-3xl mt-4 font-bold text-white'>
        {title}
      </button>
    </div>
  )
}

export default Button
