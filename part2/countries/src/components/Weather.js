import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Weather = ({capital}) => {

    const [weather, setWeather] = useState({});

    useEffect(() => {
        const weatherstack = {
            baseURL: 'http://api.weatherstack.com/',
            params: ['access_key', 'query'],
            access_key: 'dfb2953429fbc5fcd5b3213e6b7bce3a',
            endpoint: 'current',
            query: capital
        };

        console.log("weather api called")
        axios
        .get(`${weatherstack.baseURL}${weatherstack.endpoint}?${weatherstack.params[0]}=${weatherstack[weatherstack.params[0]]}&${weatherstack.params[1]}=${weatherstack.query}`)
        .then(response => setWeather(response.data))
        .catch(error => console.log(error.message));
    }, [capital]);

    return weather.current
        ? (
            <div>
                <h2>Weather for {capital}</h2>
                <ul style={{listStyleType: "none", padding: 0}}>
                    <li>Current temp: {weather.current.temperature} celsius</li>
                    <li><img src={weather.current.weather_icons[0]} alt="weather icon" /></li>
                    <li>Wind: {weather.current.wind_speed} kph direction {weather.current.wind_dir} </li>
                </ul>
            </div>
          )
        : <div><p>Loading weather...</p></div>;
};

export default Weather;
