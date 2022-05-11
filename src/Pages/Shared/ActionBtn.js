import React from 'react';

const ActionBtn = ({children}) => {
    return (
         <button    className='btn bg-gradient-to-r from-primary to-secondary text-white border-0'>{children}</button>
    );
};

export default ActionBtn;