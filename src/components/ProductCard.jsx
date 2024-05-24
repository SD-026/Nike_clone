import React from 'react'
import { star } from '../assets/icons';

const ProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 min-sm:w-full w-full flex-col'>
    <img src={imgURL}
        alt={name}
        className='w-[280px] h-[280px]'
    />
    <div className='justify-start mt-8 gap-2.5 flex '>
        <img src={star} alt='rating' width={24} height={24}/>
        <p className='text-xl leading-normal text-slate-grey'>(4.5)</p>
    </div>
    <h1 className='leading-normal mt-2 font-semibold font-palanquin text-2xl '>{name}</h1>
    <p className='text-2xl mt-2 text-coral-red font-palanquin font-semibold leading-normal'>{price}</p>
      
    </div>
  )
}

export default ProductCard
