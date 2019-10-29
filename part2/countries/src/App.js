import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => setCountries(response.data))
      .catch(error => console.log("ERROR: ", error.message));
  }, []);

  const handleChange = (event) => {
    const eventSource = event.target.name;
    switch(eventSource) {
      case 'search':
        setQuery(event.target.value);
        break;
      default:
    }
  };

  const getCountriesToShow = () => {
    const filteredCountries = countries
      .filter(country => 
        country.name.toLowerCase().includes(query.toLowerCase())
      );
      
    const perfectMatch = filteredCountries
      .find(country => 
        country.name.toLowerCase() === query.toLowerCase()
      );

    return perfectMatch ? [perfectMatch] : filteredCountries;
  };

  return (
    <Fragment>
      <Search query={query} handleChange={handleChange} />
      <Results setQuery={setQuery} query={query} countries={getCountriesToShow()} />
    </Fragment>
  );
}

export default App;
