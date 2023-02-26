import { Component } from 'react';
import { Notify } from 'notiflix';

import { Section } from './components/Section';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';

// utils
import { getFilteredArray } from './utils/getFilteredArray.js';

export class PhonebookApp extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const isUniqueName = this.state.contacts.find(
      contact => contact.name === newContact.name
    );

    if (isUniqueName) {
      Notify.failure(`${newContact.name} already exist!`);

      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));

    return true;
  };

  editContact = updatedContact => {
    this.setState(({ contacts }) => ({
      contacts: contacts.map(contact => {
        if (contact.id === updatedContact.id) {
          const newContact = {
            ...contact,
            ...updatedContact,
          };
          return newContact;
        }
        return contact;
      }),
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  setFilter = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = getFilteredArray(contacts, 'phone', filter);

    return (
      <>
        <Section title="Add contact">
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section title="Search">
          <Filter value={this.state.filter} setValue={this.setFilter} />
        </Section>

        <Section title="Contact list">
          <ContactList
            contacts={filteredContacts}
            editContact={this.editContact}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
