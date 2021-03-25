import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { contactsSelectors } from '../../redux/phonebook';
import { inputForm } from './Filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={inputForm}
      ></input>
    </>
  );
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFiltered(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
