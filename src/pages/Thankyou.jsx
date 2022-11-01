import React from "react";
import img from "../assets/1659361511042.jpeg";

export const Thankyou = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="py-5">
        <h1>Thank you, payment is being processed</h1>
      </div>
      <div>
        <img src={img} alt="" className="" />
      </div>

      <div className="py-4">
        <p>you will receive a mail shortly werey</p>
      </div>
    </div>
  );
};
