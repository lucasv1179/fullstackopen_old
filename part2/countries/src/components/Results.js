import React from 'react';

import Country from './Country';

const Results = ({setQuery, query, countries}) => {

    const showList = () => {
        let mappedList = []

        if(countries.length === 1) {
            mappedList = countries
                .map(country => {
                    return <Country key={country.name} country={country} />
                });
        } else if(countries.length < 10) {
            mappedList = countries
                .map(country => {
                    return (
                        <li key={country.name}>
                            {country.name}
                            <button style={{margin: "0 .5em"}} onClick={() => setQuery(country.name)}>Show</button>
                        </li>
                    );
                });
        } else {
            mappedList = query.length > 0
                ? [<li key="error">Too many matches. Search term must be more specific.</li>]
                : [<li key="empty"></li>];
        }

        return mappedList;
    };

    return (
        <ul style={{listStyleType: "none", padding: 0}}>
            {showList()}
        </ul>
    );
};

export default Results;
