import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors.js';
import { selectFilter } from '../../redux/filter/selectors.js';
import { ContactListItem } from '../ContactListItem/ContactListItem.jsx';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <li className={css.contactListItem} key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
      </ul>
    </>
  );
};
