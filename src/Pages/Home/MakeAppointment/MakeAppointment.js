import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="mt-40  rounded-xl"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 lg:w-1/2 hidden lg:block	 shadow-2xl"
          />
          <div>
            <h3 className="text-primary font-bold text-xl">Apponiment</h3>
            <h1 className="text-3xl font-bold mt-4 text-white">
              Make A Appointment Today
            </h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default MakeAppointment;
