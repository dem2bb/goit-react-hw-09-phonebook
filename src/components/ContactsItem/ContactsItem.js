import React from 'react';
import { delete_button, contactItem } from './ContactsItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/phonebook';

const ContactsItem = () => {
  const filtered = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  return filtered.map(({ name, number, id }) => {
    return (
      <li key={id} name={name} className={contactItem}>
        <p>name: {name}</p>
        <p>tel.: {number}</p>
        <button
          type="button"
          className={delete_button}
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        ></button>
      </li>
    );
  });
};

export default ContactsItem;
