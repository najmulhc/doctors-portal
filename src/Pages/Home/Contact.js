import React from "react";
import ActionBtn from "../Shared/ActionBtn";

const Contact = () => {
  return (
    <section>
      <div className='bg-[url("https://i.ibb.co/CtCftdr/appointment.png")] py-16 '>
        <h1 className="text-primary   text-xl text-center  ">Contact Us</h1>
        <h1 className="text-5xl text-white text-center font-light ">
          Stay connected with us
        </h1>
        <div className="  w-96 mx-auto my-4">
          <input
            type="text"
            placeholder="Email Address"
            class="input w-full my-2"
          />
          <input type="email" placeholder="Subject" class="input w-full my-2" />
          <textarea
            class="textarea w-full my-2 h-36"
            placeholder="Your message"
          ></textarea>
          <div className="w-full flex justify-center"> <ActionBtn>submit</ActionBtn></div>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;
