import { useState, useEffect } from 'react';
import Form from '../Form/index';
import { nanoid } from 'nanoid';
import ContactList from '../ContactList/index';
import Filter from '../Filter/index';
import { Title, TitleContacts, Section, Container } from './App.styled';

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
      return alert(`${name} is already in contacts!`);
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
    </Container>
  );
}

// class App extends React.Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     this.setState(({ contacts }) => {
//       if (
//         contacts.some(
//           (contact) =>
//             contact.name.trim().toUpperCase() === name.trim().toUpperCase()
//         )
//       ) {
//         return alert(`${name} is already in contacts!`);
//       }
//       return {
//         contacts: [contact, ...contacts],
//       };
//     });
//   };

//   deleteContact = (contactId) => {
//     this.setState(({ contacts }) => ({
//       contacts: contacts.filter((contact) => contact.id !== contactId),
//     }));
//   };

//   changeFitler = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   getContact = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.trim().toLowerCase();

//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   componentDidMount() {
//     console.log("App componentDidMount");

//     const contacts = localStorage.getItem("contacts");
//     const parsedContacts = JSON.parse(contacts);
//     console.log(parsedContacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log("Обновилось поле contacts");
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const getContacts = this.getContact();

//     console.log("App render");
//     return (
//       <Container>
//         <Section title="Phonebook">
//           <Title>Phonebook</Title>
//           <Form onSubmit={this.addContact} />
//         </Section>
//         <Section title="Contacts">
//           <TitleContacts>Contacts</TitleContacts>
//           <Filter value={this.state.filter} onChange={this.changeFitler} />
//           <ContactList
//             contacts={getContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }

export default App;
