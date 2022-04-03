import { useState, useEffect } from 'react';
import Form from '../Form/Form';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { Title, TitleContacts, Section, Container } from './App.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contactsStandart = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const items = localStorage.getItem('contacts');
    if (items) {
      return JSON.parse(items);
    } else {
      return contactsStandart;
    }
  });
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedContact = name.trim().toUpperCase();
    const availableContact = contacts.some(
      contact => contact.name.trim().toUpperCase() === normalizedContact,
    );

    if (availableContact) {
      return toast.error(`${name} is already in contacts!`);
    } else {
      const newContact = { id: nanoid(), name, number };
      setContacts(prev => [newContact, ...prev]);
    }
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId),
    );
  };

  const changeFitler = e => {
    setFilter(e.currentTarget.value);
  };

  const getContact = () => {
    const normalizedFilter = filter.trim().toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  useEffect(() => {
    // console.log("Обновилось поле contacts");
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Section title="Phonebook">
        <Title>Phonebook</Title>
        <Form onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={changeFitler} />
        <ContactList contacts={getContact()} onDeleteContact={deleteContact} />
      </Section>
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
    </Container>
    
  );
}


export default App;
