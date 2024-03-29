import React from "react";
import "./Home.css";
import Star_fill from ".././assets/Star_fill.svg";
import Star from ".././assets/Star.svg";

const Card = ({ data }) => {
  if (!data) {
    return null; // Return null if data is null
  }

  return (
    <div className="card">
      <img src={data.image} alt={data.name} className="card-image" />
      {data.popular && <div className="popular">Popular</div>}
      <div className="card-details">
        <h5 className="card-title">{data.name}</h5>
        <div className="price">{data.price}</div>
      </div>
      <div className="card-rating">
        <div className="rating-info">
          {data.rating ? (
            <>
              <img src={Star_fill} alt="rating" />
              <span>{data.rating}</span>
            </>
          ) : (
            <>
              <img src={Star} alt="rating" />
              <span className="no-ratings">No Ratings</span>
            </>
          )}
        </div>
        <span className="votes">({data.votes} votes)</span>
        {/* <span className="sold-out">{data.available ? "Sold out" : ""}</span> */}
      </div>
      
    </div>
  );
};

export default Card;
