import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Others/Card";
import "./Home.css";
const Home = () => {
  const places = useLoaderData();
  console.log(places);
  return (
    <>
      <div className="grid grid-cols-3 mt-5 home-container">
        {places.map((place) => (
          <Card place={place} key={place.id}></Card>
        ))}
      </div>
    </>
  );
};

export default Home;
