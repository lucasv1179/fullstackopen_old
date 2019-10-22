import React from 'react';
import Statistic from './Statistic';

const Statistics = ( { good, neutral, bad } ) => {

    const getTotal = () => good + neutral + bad;

    const getScore = () => good * 1 + neutral * 0 + bad * -1;

    const getAverage = () => {
        let average = "Cannot calculate average";
        const total = getTotal();
        if(total !== 0) {
            average = getScore() / total;
        }
        return average;
    };

    const getPositivePercentage = () => {
        let percent = "Cannot calculate percentage";
        const total = getTotal();
        if(total !== 0) {
            percent = good * 100 / getTotal();
        }
        return percent;
    };

    return (
        <div>
            <h1>Statistics</h1>
            <table style={ { listStyleType: "none", padding: 0 } }>
                <tbody>
                    <Statistic text="Good:" value={ good } decimal={ false } />
                    <Statistic text="Neutral:" value={ neutral } decimal={ false } />
                    <Statistic text="Bad:" value={ bad } decimal={ false } />
                    <Statistic text="Total:" value={ good + neutral + bad } decimal={ false } />
                    <Statistic text="Average:" value={ getAverage() } decimal={ true } />
                    <Statistic text="Positive (percent):" value={ getPositivePercentage() } decimal={ true } />
                </tbody>
            </table>
        </div>
    );
};

export default Statistics;