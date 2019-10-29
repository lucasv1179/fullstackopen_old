import React from 'react';

import Weather from './Weather';

const Country = ({country: {name, capital, population, languages, flag}}) => {

    return (
        <li key={name}>
            <div>
                <h1>{name}</h1>
                <div>
                    <ul style={{listStyleType: "none", padding: 0}}>
                        <li>Capital: {capital}</li>
                        <li>Population: {population}</li>
                    </ul>
                </div>
                <div>
                    <h2>Languages</h2>
                    <ul>
                        {
                            languages.map(({name}) => <li key={name}>{name}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <img style={{width: "20%", margin: "1em 0"}} src={flag} alt="Country's flag" />
                </div>
                <Weather capital={capital} />
            </div>
        </li>
    );
};

export default Country;
