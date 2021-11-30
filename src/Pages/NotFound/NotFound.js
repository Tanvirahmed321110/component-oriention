import React from 'react';
import { Link } from 'react-router-dom';
import Not from '../../images/download.png'
const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
             <img className="mb-5" src={Not} alt="" /><br />
            <Link to="/"><button>Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;