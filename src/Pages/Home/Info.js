import React from 'react';
import clock from "../../icons/clock.svg"
import marker from "../../icons/marker.svg"
import phone from "../../icons/phone.svg"
import SingleInfo from './SingleInfo';
const Info = () => {
    const infos = [
        {
            title: "Opening Hours",
            img: clock, 
            description: " 9am - 4pm GMT",
            bg:"bg-gradient-to-r from-primary to-secondary"
            
        },
        {
            title: "Visit our location",
            img: marker, 
            description: "221B, Baker Street, London",
            bg:"bg-accent"
        },
        {
            title: "Contact us now",
            img: phone, 
            description: "+880 190 740 21289",
            bg:"bg-gradient-to-r from-primary to-secondary"
            
        },
    ]
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3'>
            {
                infos.map(info => <SingleInfo info={info} />)
            }
        </div>
    );
};

export default Info;