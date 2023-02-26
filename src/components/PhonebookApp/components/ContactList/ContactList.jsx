import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact, editContact }) => (
  <ul>
    {contacts.map(contact => (
      <ContactListItem
        key={contact.id}
        contact={contact}
        editContact={editContact}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);
