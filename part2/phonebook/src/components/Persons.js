import React from 'react';

import Person from './Person';

const Persons = ({people, handleDelete}) => {
    const getData = () => people.map(person => 
        <Person
            key={person.name}
            name={person.name}
            number={person.number} 
            handleDelete={handleDelete(person.id)}
        />
    );

    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {getData()}
            </ul>
        </div>
    );
};

export default Persons;