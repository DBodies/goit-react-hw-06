import { useState, useEffect } from 'react'
import initialPhoneList from './phoneList.json'
import ContactList from './components/contactList'
import SearchBox from './components/searchBox'
import ContactForm from './components/contactForm'
import styles from './components/stylesForAllComponents.module.css'

export default function App() {

  const [phoneList, setPhoneList] = useState(() => {
    const saved = localStorage.getItem("saved-contact")
    if (saved) {
      return JSON.parse(saved)
    }
   return initialPhoneList
  }) 
  
useEffect(() => {
  localStorage.setItem("saved-contact", JSON.stringify(phoneList));
}, [phoneList]);

  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("saved-filter")
    if (saved) {
      return JSON.parse(saved)
    }
    return ""
  })

  const visibleFilter = phoneList.filter(phoneListItem => phoneListItem.name.toLowerCase().includes(filter.toLowerCase()))
  
  const addContact = (newContact) => {
    setPhoneList((prevContact) => {
      return [...prevContact, newContact]
    })
  }

  const deleteContact = (contactId) => {
    setPhoneList((prevContact) => {
  return prevContact.filter((currentContact) => currentContact.id !== contactId)
})
  }

  const resetContacts = () => {
    setPhoneList(initialPhoneList);
    localStorage.removeItem('saved-contact'); 
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={ addContact} />
      <SearchBox value={ filter} onFilter={setFilter} />
      <ContactList phoneList={visibleFilter} onDelete={deleteContact} />
      <button onClick={resetContacts}>return Contacts</button>
    </div>
  )
}


