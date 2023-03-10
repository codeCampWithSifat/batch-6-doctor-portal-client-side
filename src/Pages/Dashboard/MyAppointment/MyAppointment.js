// import { useQuery } from "@tanstack/react-query";
// import React, { useContext } from "react";
// import { AuthContext } from "../../../context/AuthProvider";

// const MyAppointment = () => {
//   const { user } = useContext(AuthContext);
//   const url = `http://localhost:5000/bookings?email=${user?.email}`;
//   const { data: bookings = [] } = useQuery({
//     queryKey: ["bookings", user?.email],
//     queryFn: async () => {
//       const res = await fetch(url, {
//         headers : {
//             authorization : `bearer ${localStorage.getItem("accessToken")}`
//         }
//       });
//       const data = await res.json();
//       return data;
//     },
//   });
//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-5">My Appointment </h2>
//       <div className="w-full">
//         <table className="table w-full">
//           <thead>
//             <tr>
//               <th>SL Number </th>
//               <th>Name</th>
//               <th>Treatment</th>
//               <th>Date</th>
//               <th>Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking, index) => (
//               <tr key={booking._id}>
//                 <th>{index + 1}</th>
//                 <td>{booking.patient}</td>
//                 <td>{booking.treatment}</td>
//                 <td>{booking.appointmentDate}</td>
//                 <td>{booking.slot}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyAppointment;
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers : {
          authorization : `bearer ${localStorage.getItem("accessToken")}`
        }
      });
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
  return (
    <div>
      <h3 className="text-2xl">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <th>{index + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
