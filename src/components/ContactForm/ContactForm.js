import React, { useState } from 'react';
import { form, button, form_input, inputTitle } from './ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/phonebook';

const initialState = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const [user, setUser] = useState(initialState);
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const found = contacts.find(item => {
      return item.name === user.name || item.number === user.number;
    });
    if (found) {
      alert('Такой контакт уже есть!');
      return;
    }
    dispatch(contactsOperations.addContact(user));
    setUser(initialState);
  };

  return (
    <form className={form} onSubmit={onHandleSubmit}>
      <h4 className={inputTitle}>Name</h4>
      <input
        className={form_input}
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      ></input>
      <h4 className={inputTitle}>Number</h4>
      <input
        className={form_input}
        type="number"
        name="number"
        value={user.number}
        onChange={handleChange}
      ></input>
      <button type="submit" className={button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
