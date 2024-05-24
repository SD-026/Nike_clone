// import React from 'react'
import { shoe8 } from "../assets/images";
import Button from "../components/Button";
const SuperQuality = () => {
  return (
    <section className="  max-lg:flex-col  items-center w-full min-h-screen flex max-container gap-10">
     {/* items-center max-lg:flex-col gap-10 w-full max-container */}
    
       {/* <Text section */}
      <div className="flex flex-1 flex-col w-full ">
      <h1 className="text-4xl font-palanquin font-bold  capitalize  lg:max-w-lg"> We Provide You 
      <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span>
      shoes
      </h1>
      <p className="mt-4 font-montserrat lg:max-w-lg  text-slate-gray ">
      Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
      </p>
      <p className="lg:max-w-lg text-slate-gray mt-6 info-text ">Our dedication to detail and excellence ensures your satisfaction</p>
      <div className='mt-11'>
          <Button label='View details' />
        </div>

      </div>
      <div className=" flex flex-1 justify-center items-center">
        <img className="object-contain" src={shoe8}
        width={570}
          height={522} alt='SperialProduct'/>
      </div>

    </section>
  )
}

export default SuperQuality
