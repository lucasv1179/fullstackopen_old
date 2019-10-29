import React from 'react';

const Filter = ({filter, handleChange}) => {

    return (
        <div>
            filter by name: <input name="filter" value={filter} onChange={handleChange}/>
        </div>
    );
};

export default Filter;