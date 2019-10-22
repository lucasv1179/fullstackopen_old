import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

const App = () => {
    const [ good, setGood ] = useState(0);
    const [ neutral, setNeutral ] = useState(0);
    const [ bad, setBad ] = useState(0);

    const isFeedbackEmpty = () => good === 0 && neutral === 0 && bad === 0;

    const handleClick = (buttonName) => {
        let fnq = null;
        switch(buttonName) {
            case 'good':
                fnq = () => setGood(good + 1);
                break;
            case 'neutral':
                fnq = () => setNeutral(neutral + 1);
                break;
            case 'bad':
                fnq = () => setBad(bad + 1);
                break;
            default:
                console.log("Button name not valid");
                console.log("Event handler function: ", fnq);
        }
        return fnq;
    };

    return (
        <div>
            <Feedback handleClick={handleClick} />
            {
                isFeedbackEmpty()
                ? <p>No feedback given</p>
                : <Statistics good={good} neutral={neutral} bad={bad} />
            }
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));