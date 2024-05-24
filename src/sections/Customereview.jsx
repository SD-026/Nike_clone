import React from 'react'
import { reviews } from '../contsnts'
// import ReviewCard
import ReviewCard from './../components/ReviewCard';

const Customereview = () => {
  return (
    <section className='max-container'>
    <h3 className='font-palanquin text-center text-4xl font-bold'>
      What Our <span className='text-coral-red '>Customer</span> Say?
    </h3>
    <p className='text-center m-auto info-text max-w-lg mt-4 '>
     Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex justify-evenly max-lg:flex-col items-center gap-14 '>
        {reviews.map((review)=>(
          <ReviewCard {...review}/>
        ))}
      </div>

    </section>
  )
}

export default Customereview
