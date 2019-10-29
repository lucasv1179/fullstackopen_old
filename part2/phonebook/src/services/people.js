import axios from 'axios';

const baseURL = 'http://localhost:3001/people/';

export const getPeople = () => {
    return axios
        .get(baseURL)
        .then(response => response.data);
};

export const addPerson = (person) => {
    return axios
        .post(baseURL, person)
        .then(response => response.data);
};

export const updatePerson = (id, person) => {
    return axios
        .put(`${baseURL}${id}`, person)
        .then(response => response.data);
};

export const deletePerson = (id) => {
    return axios
        .delete(`${baseURL}${id}`)
        .then(response => response.status);
};
