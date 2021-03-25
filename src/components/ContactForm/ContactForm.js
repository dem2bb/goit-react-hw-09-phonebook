import React, { Component } from 'react';
import { form, button, form_input, inputTitle } from './ContactForm.module.css';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/phonebook';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const found = this.props.contacts.find(item => {
      return item.name === this.state.name || item.number === this.state.number;
    });
    if (found) {
      alert('Такой контакт уже есть!');
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={form} onSubmit={this.onHandleSubmit}>
        <h4 className={inputTitle}>Name</h4>
        <input
          className={form_input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <h4 className={inputTitle}>Number</h4>
        <input
          className={form_input}
          type="number"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        ></input>
        <button type="submit" className={button}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: contactsOperations.addContact,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getAllContacts(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
