import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsItem from '../../components/ContactsItem/ContactsItem';
import Filter from '../../components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/phonebook';
import {
  container,
  formTitle,
  contactsCont,
  contactsList,
} from './Contacts.module.css';

const Contacts = () => {
  const isContactIncludes = useSelector(
    state => state.contacts.items.length > 0,
  );
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const error = useSelector(contactsSelectors.getErrorMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={container}>
      <h2 className={formTitle}>Phonebook</h2>
      <ContactForm />
      {error && <p className="error-message">{error}</p>}
      {isLoadingContacts && (
        <Loader type="ThreeDots" color="grey" height={100} width={100} />
      )}
      {isContactIncludes && (
        <div className={contactsCont}>
          <h2 className={formTitle}>Contacts</h2>
          <Filter />
          <ul className={contactsList}>
            <ContactsItem />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Contacts;
