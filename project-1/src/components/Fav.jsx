import React from 'react'
import Carddata from './Carddata'

const Fav = ({Prods}) => {
  return (
    <>
     <div className="flex flex-col lg:flex-row items-center justify-between w-[90%] mx-auto my-20">
              <div className=""></div>
              <h1 className='font-bold text-4xl uppercase text-[rgba(51,55,64,1)]'>Favorites</h1>
              <a></a>
          </div> 
          <div className="flex items-center justify-center">
    <div   className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[90%]'>
        {Prods.map((item)=>{
            return(
                    <Carddata 
                    key={item.id}
                    image={item.image}
                    disc={item.disc} 
                    oldprice={item.oldprice} 
                    saleprice={item.saleprice} 
                    rating={item.rating} 
                    ratingNum={item.ratingNum}/>
            )
        })}
    </div>
    </div>
    </>
  )
}

export default Fav