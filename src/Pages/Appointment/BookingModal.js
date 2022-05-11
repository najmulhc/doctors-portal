import format from "date-fns/format";
import React from "react";
import ActionBtn from "../Shared/ActionBtn";
const BookingModal = ({ service }) => {
    
  return (
    <>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            {service.name} 
          </h3>
          <form action="">
            <input
              type="text"
              value={format(new Date(), "PP")}
              disabled
              class="input w-full my-2 border-2 border-gray-400"
            />
            <select class="select w-full my-2 border-2 border-gray-400">
                {service.slots && service.slots.map(slot  => <option>{slot}</option>)}
            </select>
            <input
              type="text"
              placeholder="Your Name"
              class="input w-full my-2 border-2 border-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              class="input w-full my-2 border-2 border-gray-400"
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              class="input w-full my-2 border-2 border-gray-400"
            />
           
            <ActionBtn >Submit</ActionBtn>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
