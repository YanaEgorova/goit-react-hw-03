import Contact from '../Contact/Contact';
import css from './ContactList.module.css';


export default function ContactList({ contacts, onDelete }) {
    console.log('contacts', contacts)
    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact info={contact} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}