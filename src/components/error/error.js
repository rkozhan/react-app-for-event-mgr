import React from 'react';
import './error.css';

const Error = ({ error }) => {
    return <p className='error'>{error}</p>; 
}

export default Error;