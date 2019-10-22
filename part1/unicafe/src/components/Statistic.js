import React from 'react';

const Statistic = ({ text, value, decimal }) => {
    return (
        <tr>
            <td>{ text }</td>
            <td>{ decimal ? value.toFixed(2) : value }</td>
        </tr>
    );
};

export default Statistic;