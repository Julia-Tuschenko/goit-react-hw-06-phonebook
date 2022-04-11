import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/contactsActions";
import { Forma, LabelPhone, InputPhone, AddContact } from './Form.styled';
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

function Form({ nameId, numberId }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const stateContacts = useSelector((state) => state.contacts.items);
  // console.log(stateContacts);
  const dispatch = useDispatch();

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

  const addNewContact = () => {
      const item = {
        name,
        number,
      }
      const normalizedContact = item.name.trim().toLowerCase();

      const availableContact = stateContacts.some(
        (contact) => contact.name.trim().toLowerCase() === normalizedContact)
    
      if (availableContact) {
      return toast.error(`${item.name} is already in contacts!`);
      } else {
      dispatch(addContact(item));
      };
};

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    addNewContact();
    reset();
  };


  return (
  <>
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
        <PhoneInput
          type="tel"
          value={number}
          name="number"
          onChange={setNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelPhone>

       {/* <LabelPhone htmlFor={numberId}>
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
      </LabelPhone> */}
      <AddContact type="submit">Add contact</AddContact>
    </Forma>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="dark"
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
  </>
  );
};


export default Form;

