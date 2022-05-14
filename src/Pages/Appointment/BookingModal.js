import format from "date-fns/format";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ActionBtn from "../Shared/ActionBtn";
const BookingModal = ({ service }) => {
    const [user] = useAuthState(auth);
    const userName = user.email;
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {service.name} 
          </h3>
          <form action="">
            <input
              type="text"
              value={format(new Date(), "PP")}
              disabled
              className="input w-full my-2 border-2 border-gray-400"
            />
            <select className="select w-full my-2 border-2 border-gray-400">
                {service.slots && service.slots.map(slot  => <option>{slot}</option>)}
            </select>
            <input
              type="text"
              value={userName}
              disabled
              className="input w-full my-2 border-2 border-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="input w-full my-2 border-2 border-gray-400"
            />
            <input
              type="number"
              placeholder="Your Phone Number"
              className="input w-full my-2 border-2 border-gray-400"
            />
           
            <ActionBtn >Submit</ActionBtn>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
