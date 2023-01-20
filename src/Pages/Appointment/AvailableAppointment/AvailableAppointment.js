import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointOption from "./AppointOption";

const AvailableAppointment = ({ selected }) => {
  const [appointOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setAppointmentOptions(data);
      });
  }, []);
  return (
    <section className="mt-20">
      <p className="text-center text-indigo-600 font-bold text-xl">
        You picked {format(selected, "PP")}.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {appointOptions.map((option) => (
          <AppointOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
         setTreatment={setTreatment}
         selected={selected} treatment={treatment}></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
