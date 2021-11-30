import React from 'react';
import { useParams } from 'react-router';

const Booking = (props) => {
    // const {name}=props.data
    const {userId}=useParams()
    return (
        <div>
            <h2>This is BookIng Page</h2>
            <p>User No :{userId} </p>
            <p>User Name : </p>
        </div>
    );
};

export default Booking;