import { AddContactForm } from '../components/AddContactForm/AddContactForm';
import { SearchFilter } from '../components/SearchFilter/SearchFilter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <main>
        <h1>Phonebook</h1>
        <AddContactForm />
        <h2>Contacts</h2>
        <SearchFilter />
        {isLoading && !error && <div>Loading in progres...</div>}
        {error && <div>We cannot download your data. Please try again.</div>}
        <ContactList />
      </main>
    </>
  );
};

export default Contacts;
