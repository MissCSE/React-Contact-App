import React, { useState } from 'react';
import './App.css';
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <h1>Contact List App</h1>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
