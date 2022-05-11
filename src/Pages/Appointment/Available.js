import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Available = ({ date }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
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
          <SingleService key={service._id} service={service} />
        ))}
      </div>

     

      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <a href="#" class="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Available;
