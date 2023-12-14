import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container/Container.styled';
import { Filter } from './Filter/Filter';
import initialContacts from '../datajson/initContacts.json';
import { Title } from './Title/Title.styled';
import { Subtitle } from './Subtitle/Subtitle.styled';

export class App extends Component {
  state = {
    contacts: [...initialContacts],
    filter: '',
  };

  addContact = contactData => {
    const { name: newName } = contactData;

    if (this.isInContacts(newName)) {
      return alert(`${newName} is in contacts!`);
    }

    this.setState(prevState => {
      const contact = { id: nanoid(), ...contactData };

      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
  };

  isInContacts = newName => {
    const { contacts } = this.state;
    const newNameToLowerCase = newName.toLowerCase();

    return contacts.some(
      ({ name }) => name.toLowerCase() === newNameToLowerCase
    );
  };

  onFilterChange = event => this.setState({ filter: event.target.value });

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowercase = filter.toLowerCase();

    return !filter
      ? contacts
      : contacts.filter(({ name }) =>
          name.toLowerCase().includes(filterToLowercase)
        );
  };

  onItemDelete = delId =>
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(({ id }) => id !== delId) };
    });

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <Subtitle>Contacts</Subtitle>
        <Filter value={filter} onFilterChange={this.onFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onItemDelete={this.onItemDelete}
        />
      </Container>
    );
  }
}
