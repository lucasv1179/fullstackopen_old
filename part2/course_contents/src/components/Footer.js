import React from 'react';

const Footer = ({ parts }) => {
    const getTotalExercises = () => {
        return parts.reduce((total, part) => total + part.exercises, 0);
    };

    return (
        <p><b>Total of {getTotalExercises()} exercises</b></p>
    );
};

export default Footer;