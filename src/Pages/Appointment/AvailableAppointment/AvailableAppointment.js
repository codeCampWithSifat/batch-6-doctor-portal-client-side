import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointOption from "./AppointOption";

const AvailableAppointment = ({ selected }) => {
  // const [appointOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selected, "PP");
  const { data: appointOptions , isLoading , refetch } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <button className="btn loading ">loading</button>
      </div>
    );
  }

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAppointmentOptions(data);
  //     });
  // }, []);
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
          selected={selected}
          treatment={treatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
