import React from "react";

const AppointOption = ({ option, setTreatment }) => {
  const { name, slots } = option;
  return (
    <div className="card  bg-base-100 shadow-xl mt-10">
      <div className="card-body justify-center items-center">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        {/* <button className="btn text-white w-1/2 btn-primary">
          Book Appointment
        </button> */}
        <label
          htmlFor="booking-modal"
          disabled={slots.length === 0 }
          className="btn text-white w-1/2 btn-primary"
          onClick={() => setTreatment(option)}
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointOption;
