import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormLabel, Input } from './Phonebook.styled';

function Phonebook({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeContact = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact(name, number);
    resetForm();
  };


  const resetForm = () => {
    setName('');
    setNumber('');
  };


  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <Input
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeContact}
        />
      </FormLabel>
      <FormLabel>
        Number
        <Input
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          value={number}
          onChange={handleChangeContact}
        />
      </FormLabel>
      <Button type='submit'>Add contact</Button>
    </Form>
  );

}

Phonebook.propType = {
  onAddContact: PropTypes.func.isRequired,
};
export default Phonebook;
