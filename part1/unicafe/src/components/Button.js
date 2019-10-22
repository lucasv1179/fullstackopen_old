import React from 'react';

const Button = ({ text, onClick, name }) => {

    return (
        <button name={ name } onClick={ onClick }>{ text }</button>
    );
};

export default Button;