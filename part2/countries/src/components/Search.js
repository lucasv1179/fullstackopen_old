import React from 'react';

const Search = ({query, handleChange}) => {
    return (
        <div>
            Find country: <input name="search" value={query} onChange={handleChange}/>
        </div>
    );
};

export default Search;
