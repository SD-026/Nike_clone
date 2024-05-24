import React from 'react'

const ServiceCard = ({label,imgURL,subtext}) => {
  return (
    <div className='rounded-[20px] w-full flex-1  sm:w-[350px] sm:min-w-[350px] px-10 py-16 shadow-3xl  '>
        <div className='w-11 h-11  flex justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} width={24} height={24}/>
        </div>  
        <h3 className='mt-5 text-3xl font-bold  leadind-normal '>{label}</h3>
        <p className='text-slate-gray mt-4 font-montserrat break-words leading-normal text-lg'>{subtext}</p>


      
    </div>
  )
}

export default ServiceCard
