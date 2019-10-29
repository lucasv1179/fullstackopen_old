import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
    const getParts = () => {
        return parts.map(part => 
            <Part
                key={part.id}
                name={part.name}
                exercises={part.exercises}
            />
        );
    };

    return (
        <ul>
            { getParts() }
        </ul>
    );
};

export default Content;