import React from "react";
import doctor from "../../images/doctor-small.png";
const HomeAppoinement = () => {
  return (
    <section className="my-16 ">
      <div className='bg-[url("https://i.ibb.co/CtCftdr/appointment.png")] p-0 m-0'>
        {" "}
        <img src={doctor} className=" " alt="" />
      </div>
    </section>
  );
};

export default HomeAppoinement;
