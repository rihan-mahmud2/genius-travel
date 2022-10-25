import React from "react";
import { useLoaderData } from "react-router-dom";
import HotelDetails from "../Pages/HotelDetails/HotelDetails";
import SimpleMap from "./SimpleMap/SimpleMap";

const Book = () => {
  const hotels = useLoaderData();
  return (
    <div className="grid grid-cols-2">
      <div>
        {hotels.map((ht) => (
          <HotelDetails ht={ht} key={ht.id}></HotelDetails>
        ))}
      </div>
      <div>{/* <SimpleMap></SimpleMap> */}</div>
    </div>
  );
};

export default Book;
