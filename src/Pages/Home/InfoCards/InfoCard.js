import React from "react";

const InfoCard = ({card}) => {
    const {name, description, icon, bgClass} = card;
    // console.log(icon)
  return (
    <div className={`px-4 text-white card card-side shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default InfoCard;
