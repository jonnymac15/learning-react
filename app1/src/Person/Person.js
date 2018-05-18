import React from 'react';
import './Person.css';

const person = ({click, name, age}) => {
    return(
        <div>
            <p onClick={click}>I am {name}, and I am {age}</p>
        </div>
    )
}

export default person;