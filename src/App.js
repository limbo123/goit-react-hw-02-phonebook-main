import React from "react";
import shortid from "shortid";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

// const testContacts = [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
// {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
// {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
// {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}]

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  createForm = (name, number) => {
    if (
      this.state.contacts.every((el) => {
        return el.name !== name;
      })
    ) {
      const contact = {
        name,
        number,
        id: shortid.generate(),
      };

      this.setState((prevState) => {
        return {
          contacts: [contact, ...prevState.contacts],
        };
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((cont) => cont.id !== id),
    }));
  };

  setFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm createForm={this.createForm} />

        <h1>Contacts</h1>
        <Filter filter={this.state.filter} filterChange={this.setFilter} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
