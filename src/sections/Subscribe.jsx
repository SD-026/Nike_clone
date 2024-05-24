// import React from 'react'

import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section 
    id="contact-us"
    className="justify-center items-center gap-10 max-lg:flex-col flex ">
<h3 className="text-4xl whitespace-normal leading-[68px] font-palanquin font-bold lg:max-md ">Sign Up for <span className="text-coral-red ">Update</span> & Newsletter</h3>

<div className=" lg:max-w-[40%] w-full items-center  flex max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
  <input 
    placeholder="Subscribe@gmail.com"
    type="text"
    className="input"

  />
  <div className=" max-sm:justify-end items-center flex max-sm:w-full ">
    <Button 
      label='Sign Up'
      
    />
  </div>
</div>
    </section>
  )
}

export default Subscribe
