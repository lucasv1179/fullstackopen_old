import React from 'react';

const AddPersonForm = ({handleChange, handleSubmit, name, phoneNumber}) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input name="name" value={name} onChange={handleChange} />
                </div>
                <div>
                    phone number: <input name="phoneNumber" value={phoneNumber} onChange={handleChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddPersonForm;