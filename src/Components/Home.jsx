import React, { useState, useEffect } from "react";
import "./Home.css";
import bg_cafe from ".././assets/bg-cafe.jpg";
import vector from ".././assets/vector.svg";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="main">
      <img className="bgImg" src={bg_cafe} alt="background" />
      <div className="listing">
        <div className="content">
          <img src={vector} alt="vector" />
          <h2>Our Collection</h2>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>
        <div className="btn">
          <button className="btn1">All Products</button>
          <button className="btn2">Available Now</button>
        </div>
        <div className="cards-container">
          {data.map((coffee) => (
            <Card key={coffee.id} data={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
