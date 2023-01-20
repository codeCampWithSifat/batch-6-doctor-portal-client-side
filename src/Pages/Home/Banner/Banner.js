import React from "react";
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <section style={{ background: `url(${bg})`}}>
      <div className="hero mt-14 	">
        <div className="hero-content flex-col lg:flex-row-reverse my-4">
          <img src={chair} className="rounded-lg w-6/12 shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="text-white btn btn-primary bg-primary bg-gradient-to-r from-primary to-secodary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
