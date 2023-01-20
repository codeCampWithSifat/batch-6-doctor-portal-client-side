import React from "react";
import chair from "../../../assets/images/chair.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ selected, setSelected }) => {
  return (
    <div>
      <div className="hero h-3/5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AppointmentBanner;
