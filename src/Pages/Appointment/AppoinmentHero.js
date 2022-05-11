import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../images/chair.png";

const AppoinmentHero = ({date, setDate}) => {
   
  return (
    <div className=" ">
      <div className="hero min-h-screen  bg-[url('https://i.ibb.co/NjjN6sN/bg.png')] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
            alt="chair imgae"
          />
          <div className="flex items-center justify-center w-full h-full ">
           <div className="bg-white rounded-xl shadow-md p-2 mx-32"> <DayPicker
           mode="single"
            selected={date}
            onSelect={setDate}
             /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentHero;
