import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selected , setTreatment}) => {
  const { name, slots } = treatment;
  const date = format(selected, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone,
      address,
    };
   // send date to the server for any kind of information
   // and once data is saved then close the modal
   // and display the toast


    console.log(booking);
    setTreatment(null)
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal text-center">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >X

          </label>
          <h3 className="text-lg font-bold text-secondary">{name}</h3>
          <form className="mt-4" onSubmit={handleBooking}>
            <input
              type="text"
              value={date}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs my-2"
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="submit"
              className="input btn-primary text-white input-bordered w-full max-w-xs my-2"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
