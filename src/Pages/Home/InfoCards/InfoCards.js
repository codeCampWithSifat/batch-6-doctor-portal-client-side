import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardDate = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9am-5pm everyday",
      icon: clock,
      bgClass: "bg-primary",
    },
    {
      id: 2,
      name: "Visit Our Locations",
      description: "Open 9am-5pm everyday",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us Now",
      description: "Open 9am-5pm everyday",
      icon: phone,
      bgClass: "bg-primary",
    },
  ];
  return (
    <div className="mt-20 mx-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
      {cardDate.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
