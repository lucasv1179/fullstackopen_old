import React, {useState, useEffect, Fragment} from 'react';
import * as peopleServices from './services/people';
import './index.css';

import Filter from './components/Filter';
import AddPersonForm from './components/AddPersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';

function App() {

  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');

  useEffect(() => {
    peopleServices
      .getPeople()
      .then(response => setPeople(response))
      .catch(error => console.log("ERROR: ", error.message));
  }, []);

  const handleChange = (event) => {
    const eventSource = event.target.name;

    switch(eventSource) {
      case 'name':
        setNewName(event.target.value);
        break;
      case 'phoneNumber':
        setNewPhoneNumber(event.target.value);
        break;
      case 'filter':
        setFilter(event.target.value);
        break;
      default:
    }
  };

  const setNotification = (message, type = 'notification', fadeout = 5000) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotificationMessage('');
    }, fadeout);
  };

  const handleDelete = (id) => () => {
    window.confirm(`Delete ${people.find(person => person.id === id).name}?`)
    &&
    peopleServices
      .deletePerson(id)
      .then(status => {
        if(status === 200) {
          const newPeople = people.filter(person => person.id !== id);
          setPeople(newPeople);
          setNotification(`${people.find(person => person.id === id).name} was deleted`);
        }
      })
      .catch((error) => {
        if(error.response.status === 404) {
          setNotification(`${people.find(person => person.id === id).name} was already deleted from the server`, 'error');
          setPeople(people.filter(person => person.id !== id));
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const personID = findPersonId(newName);

    if(!personID) {

      const newPerson = {
        name: newName,
        number: newPhoneNumber
      };

      peopleServices
        .addPerson(newPerson)
        .then(addedPerson => setPeople([...people, addedPerson]));

        setNotification(`${newPerson.name} was added`);

    } else {

      if(isPhoneRepeated(personID, newPhoneNumber) || !newPhoneNumber) {

        alert(`The name ${newName} is already in the phonebook.`);

      } else {

        window.confirm(`Update phone number for ${newName} to ${newPhoneNumber}?`)
        &&
        peopleServices
          .updatePerson(personID, {...people.find(person => person.id === personID), number: newPhoneNumber})
          .then(updatedPerson => {
            const newPeople = [...people].map(person => {
              return person.id === personID
              ? updatedPerson
              : person;
            });
            
            setPeople(newPeople);
            setNotification(`Phone for ${newName} was updated`);
          });
      }
    }

    setNewName('');
    setNewPhoneNumber('');
  };

  function findPersonId(name) {
    let id = undefined;
    const person = people.find(person => person.name === name);
    if(person) {
      id = person.id;
    }
    return id;
  };

  function isPhoneRepeated(id, number) {
    return people.find(person => person.id === id).number === number;
  };

  function applyFilter() {
    return people.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Fragment>
      <Notification message={notificationMessage} type={notificationType}/>
      <h1>Phonebook</h1>
      <Filter filter={filter} handleChange={handleChange} />
      <h2>Add new person</h2>
      <AddPersonForm
        name={newName}
        phoneNumber={newPhoneNumber}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <h2>Numbers</h2>
      <Persons people={!filter ? people : applyFilter()} handleDelete={handleDelete} />
    </Fragment>
  );
}

export default App;
