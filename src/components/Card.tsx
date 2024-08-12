import React from "react";

const Card = ({ title, price, features }:{ title:string, price:number|string, features:string[] }) => {
  return (
    <div className="card" style={{
        color:'black',
        height:250
    }}>
      <h2 className="card-title">{title}</h2>
      <p className="card-price">{price} Rs/month</p>
      <ul className="card-features">
        {features.map((feature, index) => (
          <li key={index}>✅{feature}</li>
        ))}
      </ul>
      <button className="card-button" style={{
        position:'absolute',
        bottom:10,
        left:92
      }}>Subscribe</button>
    </div>
  );
};

export default Card;
