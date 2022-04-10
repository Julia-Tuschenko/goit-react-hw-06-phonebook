import Form from '../Form/index';
import ContactList from '../ContactList/index';
import Filter from '../Filter/index';
import { Title, TitleContacts, Section, Container } from './App.styled';

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <Title>Phonebook</Title>
        <Form/>
      </Section>
      <Section title="Contacts">
        <TitleContacts>Contacts</TitleContacts>
        <Filter/>
        <ContactList/>
      </Section>
    </Container>
  );
};


export default App;




