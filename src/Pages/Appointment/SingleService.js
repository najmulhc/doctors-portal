import React from 'react';
import ActionBtn from '../Shared/ActionBtn';

const SingleService = ({service}) => {
    const {name, slots} = service;
    const task= () => {
        console.log("task is called");
    }
    return (
        <div class="card w-full bg-white p-4 shadow-xl">
        <div class="card-body">
        <h2 className="text-primary uppercase text-xl text-center font-bold ">{name}</h2>
          <p className='text-accent text-center font-medium'>{slots[0] ? slots[0] : "No slots found"}</p>
          <p className='text-accent text-center uppercase font-medium'>{slots[0] ? slots.length : 0} {slots.length >1 ? "Spaces" : "Space"} available</p>
          <div class="card-actions justify-center">
           <ActionBtn  refCard="#my-modal-2" >Book now</ActionBtn>
           
          </div>
        </div>
      </div>
    );
};

export default SingleService;