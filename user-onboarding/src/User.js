import React from 'react';

export default function User({ details }) {
    if(!details) {
        return <h3>Working on fetching your user details...</h3>
    }

    return (
        <div className='user container'>
            <h3>{details.name}</h3>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms of Service: Accepted</p>
        </div>
    )

}