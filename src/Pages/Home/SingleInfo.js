import React from 'react';

const SingleInfo = ({info}) => {
    return (
        <div className={`${info.bg} text-white flex p-8 rounded-md m-4 shadow-md items-center`}>
            <img src={info.img} alt="" />
            <div className='ml-4 ' >
                <h2 className='text-4xl font-semibold'>{info.title}</h2>
                <p>{info.description}</p>
            </div>
        </div>
    );
};

export default SingleInfo;