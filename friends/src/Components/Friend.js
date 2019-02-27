import React from 'react';


const Friend = props => {
    const { name, age, email } = props.data;
    return (
        <>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Age:</strong>{age}</p>
            <p><strong>Email:</strong>{email}</p>  
        </>
    )
}

export default Friend;