import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Treatment = () => {
  return (
    <div className=" card lg:card-side bg-base-100 shadow-xl mt-20">
      <figure className="flex-1">
        <img src={treatment} className="w-full h-5/6" alt="Album" />
      </figure>
      <div className="card-body flex-1 mt-40 mx-10">
        <h2 className="card-title text-3xl font-bold">Care On Your Terms!</h2>
        <h2 className="card-title text-3xl font-bold">Exceptional Dental!</h2>
        <p className="mt-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like) <br />
          <button className="text-white btn btn-primary bg-primary bg-gradient-to-r from-primary to-secodary my-4">
          Get Started
        </button>
        </p>
        
      </div>
     
    </div>
  );
};

export default Treatment;
