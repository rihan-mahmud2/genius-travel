import React, { useState } from "react";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const Card = ({ place }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={place.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{place.name}!</h2>

        <a href="#my-modal-2" className="btn">
          open modal
        </a>

        <div className="modal" id="my-modal-2">
          <div className="modal-box">
            <div className="text-center">
              <div className="form-control">
                <label className="label">
                  <span className="label-text block">From Where</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Origin"
                    className="input input-bordered"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text block">Where To</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Your destination"
                    className="input input-bordered"
                  />
                </label>
              </div>
            </div>

            <div className="mt-5">
              <div className="form-control">
                <div className="input-group">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="input input-bordered"
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="input input-bordered"
                  />
                </div>
              </div>
            </div>

            <div className="modal-action">
              <Link to={`/spot/${place.id}`} className="btn">
                Booked
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
