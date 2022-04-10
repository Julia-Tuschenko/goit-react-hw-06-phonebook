import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/contactsActions";
import { ListContact, ListItem, ListButton } from './Contacts.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const mapFilterContacts = useSelector((state) => {
    const filter = state.contacts.filter;
    const contacts = state.contacts.items;

    const normalizedFilter = filter.trim().toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),)
  });

  return (
    <ListContact>
      {mapFilterContacts.map(({ id, name, number }) => {
        return (
        <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <ListButton type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </ListButton>
      </ListItem>
      )}
      )}
    </ListContact>
  );
};


export default ContactList;
