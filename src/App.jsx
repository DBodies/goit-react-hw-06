import { useState, useEffect } from 'react'
import ContactList from './components/contactList'
import SearchBox from './components/searchBox'
import ContactForm from './components/contactForm'
import styles from './components/stylesForAllComponents.module.css'
import { useDispatch } from 'react-redux'
import { returnContacts } from './redux/contactsSlice'
import { useSelector } from 'react-redux'
import { filterContact} from './redux/filtersSlice'


export default function App() {
  const dispatch = useDispatch()
  const handleReset = () => {
    dispatch(returnContacts())
  }
  const filter = useSelector((state) => state.filter.items);
  const handleFilterChange = (value) => {
    dispatch(filterContact(value));
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox filter={filter} onFilter={handleFilterChange} />
      <ContactList/>
      <button onClick={handleReset}>return Contacts</button>
    </div>
  )
}


