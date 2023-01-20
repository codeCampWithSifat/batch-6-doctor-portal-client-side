import React from 'react';
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png"
import whitening from "../../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name : "Flroride Treatment",
            description : "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img : fluoride,
        },
        {
            id: 2,
            name : "Cavity Treatment",
            description : "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img : cavity,
        },
        {
            id: 3,
            name : "Teeth Whitening",
            description : "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img : whitening,
        }
    ]
  return (
   <div>
    <div>
        <h2 className='text-primary font-bold text-center text-2xl mt-20 uppercase'>Our Service </h2>
        <h1 className='text-center text-accent uppercase text-4xl mt-4'>Service We Provide</h1>
    </div>
     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
        
        {
          services.map(service => <Service key={service.id} service={service}></Service>)
        }
      </div>
   </div>
  )
}

export default Services
