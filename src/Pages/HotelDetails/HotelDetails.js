import React from "react";

const HotelDetails = ({ ht }) => {
  return (
    <div className="mt-2">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={ht.img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{ht.name}</h2>
          <p>{ht?.details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
