import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import SingleTestimonial from "./SingleTestimonial";
const Testimonial = () => {
  const testmonials = [
    {
      _id: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae molestias adipisci blanditiis repudiandae obcaecati ea, dolorum asperiores iste! Ipsam, accusantium.",
      img : people1,
      country : "Canada",
      name : "Henry"
    },
    {
        _id: 2,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae molestias adipisci blanditiis repudiandae obcaecati ea, dolorum asperiores iste! Ipsam, accusantium.",
        img : people2,
        country :" France",
        name : "Henry"
      },
      {
        _id: 3,
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae molestias adipisci blanditiis repudiandae obcaecati ea, dolorum asperiores iste! Ipsam, accusantium.",
        img : people3,
        country : "United Kingdom",
        name : "Henry"
      },
  ];
  return (
    <section className="mt-28">
      <div className="flex justify-between">
        <div>
          <h3 className="text-md text-primary font-bold">Testimonial</h3>
          <h1 className="text-2xl text-black-600 mt-2">
            What Our Patient Say ?{" "}
          </h1>
        </div>
        <div>
          <img src={quote} className="w-1/2" alt="" />
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            testmonials.map(testimonial => <SingleTestimonial key={testimonial._id} testimonial={testimonial}></SingleTestimonial>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
