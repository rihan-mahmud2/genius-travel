import React, { useState } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Card = ({ place }) => {
  const { name, id, img } = place;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="card w-96 h-[70%] bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        {/* modal starts here  */}

        <a href={`#my-modal-${id}`} className="btn">
          open modal
        </a>

        <div className="modal" id={`my-modal-${id}`}>
          <div className="modal-box">
            {/* Input field starts here  */}

            <div>
              <input
                type="text"
                placeholder="Type here your origin"
                className="input input-bordered input-md w-full max-w-xs"
              />

              <input
                type="text"
                placeholder="Type here your destination"
                className="input input-bordered input-md mt-2 w-full max-w-xs"
              />
              <div className="flex">
                <DatePicker
                  className="input input-bordered input-md mt-2 w-full max-w-xs"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
                <DatePicker
                  className="input input-bordered input-md mt-2  max-w-xs ml-1"
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>

            <div className="modal-action">
              <Link to={`/hotels/${id}`} className="btn">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
