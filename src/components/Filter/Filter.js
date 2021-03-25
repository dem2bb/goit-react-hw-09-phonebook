import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';
import { contactsSelectors } from '../../redux/phonebook';
import { inputForm } from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFiltered);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={inputForm}
      ></input>
    </>
  );
};

export default Filter;
