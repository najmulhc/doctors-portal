import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppoinmentHero from "./AppoinmentHero";
import Available from "./Available";
const Appoinment = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentHero date={date} setDate={setDate} />
      
      <Available date={date} />
      <Footer />
    </div>
  );
};

export default Appoinment;
