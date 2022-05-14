import React from 'react';
import ActionBtn from '../Shared/ActionBtn';

const SingleService = ({service, selected}) => {
    const {name, slots} = service;
  
    return (
        <div class="card w-full bg-white p-4 shadow-xl">
        <div class="card-body">
        <h2 className="text-primary uppercase text-xl text-center font-bold ">{name}</h2>
          <p className='text-accent text-center font-medium'>{slots[0] ? slots[0] : "No slots found"}</p>
          <p className='text-accent text-center uppercase font-medium'>{slots[0] ? slots.length : 0} {slots.length >1 ? "Spaces" : "Space"} available</p>
          <div className="card-actions justify-center">
          <label 
          for="my-modal-3"
      
          onClick={() => selected(service)}
           class="btn bg-gradient-to-r from-primary to-secondary disabled text-white border-0"> book now</label>
           
          </div>
        </div>
      </div>
    );
};

export default SingleService;