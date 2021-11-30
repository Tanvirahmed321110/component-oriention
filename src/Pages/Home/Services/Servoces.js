import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Service from "../Service/Service";
import "./Services.css";
const Servoces = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="home">
      <div>
        <Banner></Banner>
        <h2>Our User</h2>
      </div>
      <div id="services" className="container">
        {services.map((single) => (
          <Service key={single.id} allData={single}></Service>
        ))}
        <Link to="/">
          <button>Go To Home</button>
        </Link>
      </div>
      <div id="black" style={{ height: "360px", backgroundColor: "red" }}>
          red
        </div>
    </div>
  );
};

export default Servoces;
