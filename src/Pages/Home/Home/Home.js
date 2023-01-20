import React from 'react'
import Banner from '../Banner/Banner'
import ContactUs from '../ContactUs/ContactUs'
import InfoCards from '../InfoCards/InfoCards'
import MakeAppointment from '../MakeAppointment/MakeAppointment'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'
import Treatment from '../Treatment/Treatment'

const Home = () => {
  return (
    <div className=''>
      <Banner />
      <InfoCards />
      <Services />
      <Treatment />
      <MakeAppointment />
      <Testimonial />
      <ContactUs />
    </div>
  )
}

export default Home
