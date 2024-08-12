// src/pages/PricingPage.js
import React, { useEffect, useState } from "react";
import Card from "./Card";

const PricingPage = () => {
  const plans = [
    {
      title: "API for devs",
      price: 300,
      features: ["120 requests/day", "Medium quality images"],
    },
    {
      title: "Enterprise",
      price: 500,
      features: ["Enhanced Images", "Unlimited generations"],
    },
    {
      title: "Custom",
      price: '~',
      features: ["Tailored to specific needs"],
    },
  ];

  return (
    <div>
      <div className="price-header">
        <h1>Pricing</h1>
      </div>
      <div className="pricing-page">
        {plans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
