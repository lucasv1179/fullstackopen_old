import React from 'react';

const Total = ({ course: { parts } }) => (
    <p>
        Number of exercises { parts.reduce( (sum, part) => sum + part.exercises, 0 ) }
    </p>
);

export default Total;
