import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Forma, LabelPhone, InputPhone, AddContact } from './Form.styled';

function Form({ onSubmit, nameId, numberId }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelChange = event => {
    const onName = event.currentTarget.name;
    const value = event.currentTarget.value;

    switch (onName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Forma onSubmit={handelSubmit}>
      <LabelPhone htmlFor={nameId}>
        Name
        <InputPhone
          type="text"
          value={name}
          name="name"
          onChange={handelChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelPhone>

      <LabelPhone htmlFor={numberId}>
        Number
        <InputPhone
          type="tel"
          value={number}
          name="number"
          onChange={handelChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelPhone>
      <AddContact type="submit">Add contact</AddContact>
    </Forma>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

