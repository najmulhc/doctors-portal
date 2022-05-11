import { format } from 'date-fns';
import React from 'react';

const Available = ({date}) => {
    return (
        <div className='my-16'>
             <h2 className="text-primary uppercase text-xl text-center font-bold ">
       Appoinments available after {format(date, "PP")}
      </h2>
        </div>
    );
};

export default Available;