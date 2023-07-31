import React, { useEffect, useState, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './App.styled';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './Notification.module.css';

const LS_KEY = 'contacts';


const notification = (message) => {
  toast.warn(`🦄 ${message}`, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: css.custom,
    theme: 'light',
  });
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }

  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));

    if (savedContacts && savedContacts.length > 0) {
      setContacts(savedContacts);
    }

  }, []);
  const isContactUnique = (newName) => {
    return contacts.some(({ name }) => name === newName);

  };
  const validateName = (name) => {
    const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    return namePattern.test(name);

  };
  const validateNumber = (number) => {
    const numberPattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return numberPattern.test(number);

  };
  const addContact = (newName, number) => {
    if (isContactUnique(newName)) {
      notification(`${newName} is already in contacts.`);
      return;

    }
    if (!validateName(newName)) {
      notification('Please enter a valid name');
      return;

    }
    if (!validateNumber(number)) {
      notification('Please enter a valid phone number');
      return;
    }
    const newContact = {
      id: nanoid(),
      name: newName,
      number,
    };
    setContacts([newContact, ...contacts]);
    console.log(contacts);

  };
  const deleteContact = contactId => {
    const deletedContact = contacts.find(contact => contact.id === contactId);
    if (deletedContact) {
      const { name } = deletedContact;
      setContacts(contacts.filter(contact => contact.id !== contactId));
      notification(`Deleted contact: ${name}`);
    }

  };
  const changeFilter = evt => {
    setFilter(`${evt.currentTarget.value}`);

  };


  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }, [contacts, filter]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Phonebook onAddContact={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {filteredContacts.length > 0 ? (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>No contacts found</p>
      )}
      <ToastContainer />
    </Container>
  );
}

export default App;
