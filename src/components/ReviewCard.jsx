// import React from 'react'

import { star } from "../assets/icons"
const ReviewCard = ({customerName,rating,imgURL,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
    <img 
        src={imgURL}
        className="rounded-full object-contain w-[128px] h-[128px]"
    />

        <p className="text-wrap info-text text-center mt-6 gap-2 whitespace-nowrap text-slate-gray">{feedback}</p>

        <div className=" mt-4 flex items-center  justify-center gap-2">
            <img src={star} width={28} height={28}
            className="object-contain m-0  "
             />
             <p className="text-slate-gray text-lg font-montserrat">({rating})</p>
        </div>
        
        <h3 className="text-bold text-3xl text-center font-palanquin mt-4">{customerName}</h3>

        
    
      
    </div>
  )
}

export default ReviewCard

