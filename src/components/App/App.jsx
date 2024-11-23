import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

const initialContactsValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function setSavedContacts() {
  const savedContacts = localStorage.getItem("saved-contacts");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return initialContactsValues;
}

export default function App() {
  const [contacts, setContacts] = useState(setSavedContacts);
  const [value, setValue] = useState("");

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAdd = newContact => {
    setContacts(allContacts => [...allContacts, newContact]);
  };

  const onDelete = id => {
    setContacts(allContacts =>
      allContacts.filter(contact => contact.id !== id)
    );
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm onAdd={onAdd} />
      <SearchBox value={value} onFilter={setValue} />
      <ContactList contacts={visibleContacts} onDelete={onDelete} />
    </div>
  );
}
