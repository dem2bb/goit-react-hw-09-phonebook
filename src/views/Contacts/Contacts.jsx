import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsItem from '../../components/ContactsItem/ContactsItem';
import Filter from '../../components/Filter/Filter';
import { connect } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../../redux/phonebook';
import {
  container,
  formTitle,
  contactsCont,
  contactsList,
} from './Contacts.module.css';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoadingContacts, isContactIncludes, error } = this.props;
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
              <ContactsItem filtered={this.props.contacts} />
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
  isContactIncludes: state.contacts.items.length > 0,
  isLoadingContacts: contactsSelectors.getLoading(state),
  error: contactsSelectors.getErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
