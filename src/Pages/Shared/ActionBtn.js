import React from 'react';
import { Link } from 'react-router-dom';

const ActionBtn = ({children, refCard}) => {
    return (
         <Link   to={refCard} className='btn bg-gradient-to-r from-primary to-secondary text-white border-0'>{children}</Link>
    );
};

export default ActionBtn;