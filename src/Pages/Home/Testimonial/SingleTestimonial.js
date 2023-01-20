import React from 'react'

const SingleTestimonial = ({testimonial}) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
    <div className="card-body">
     
      <p>{testimonial.description}</p>
      <div className='flex  mt-4'>
        <div>
            <img src={testimonial.img} alt="" />
        </div>
        <div className='mx-6 my-4'>
            <h2 className=' text-red-400'>{testimonial.name}</h2>
            <p>{testimonial.country}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleTestimonial
