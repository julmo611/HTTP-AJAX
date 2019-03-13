import React from 'react';




function Friend ({ delFriend, data, upFriend}) {
    
     
    return (
        <>  
            <button onClick={delFriend.bind(this, data.id)}>Delete</button>
            <button onClick={upFriend.bind(this, data.id)}>Edit Friend</button>
            <p><strong>Name: </strong>{data.name}</p>
            <p><strong>Age: </strong>{data.age}</p>
            <p><strong>Email: </strong>{data.email}</p>  
        </>
    )
}

export default Friend;