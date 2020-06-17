import React from 'react';

export default function User({ details }) {
    if(!details) {
        return <h3>Working on fetching your user details...</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Passowrd: {details.password}</p>
            <p>Terms of Service: {details.tos}</p>
        </div>
    )

}