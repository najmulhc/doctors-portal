import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import SingleService from "./SingleService";

const Available = ({ date }) => {
  const [services, setServices] = useState([]);
  const [selected, setSelected] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="container mx-auto my-16">
       
      <h2 className="text-primary uppercase text-xl text-center font-bold ">
        Appoinments available after {format(date, "PP")}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-12">
        {services.map((service) => (
          <SingleService key={service._id} service={service} selected={setSelected} />
        ))}
      </div>
     <BookingModal service={selected} />

    </section>
  );
};

export default Available;
