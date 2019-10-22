import React from 'react';
import Button from './Button.js';

const Feedback = ( { handleClick } ) => {

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button name="good" text="good" onClick={ handleClick("good") } />
            <Button name="neutral" text="neutral" onClick={ handleClick("neutral") } />
            <Button name="bad" text="bad" onClick={ handleClick("bad") } />
        </div>
    );
};

export default Feedback;