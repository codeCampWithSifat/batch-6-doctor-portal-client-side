import React from 'react';
import appointment from "../../../assets/images/appointment.png";

const ContactUs = () => {
  return (
    <section className='mt-28 rounded-xl'
    style={{
        background : `url(${appointment})`,
        backgroundSize :"cover",
        height : "60vh"
    }}
    >
     <div className='  text-center mt-12'>
     <h2 className='text-primary font-bold text-xl '>Contact Us</h2>
      <h1 className='text-white text-3xl  '>Stay Connected With Us</h1>
      <form className='flex flex-col justify-center items-center mt-4'>
      <input type="email" placeholder="Your Email" className="input input-bordered w-1/2 my-2" />
      <input type="text" placeholder="Your Subject" className="input input-bordered w-1/2 my-2" />
      <textarea type="text" placeholder="Your Message" className="input input-bordered w-1/2 my-2" />
      <button type='submit' className="btn btn-success text-white btn-primary w-1/2 my-2">Submit</button>
      </form>
     </div>
    </section>
  )
}

export default ContactUs
