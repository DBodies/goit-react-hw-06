import { useSelector } from "react-redux";
import Contacts from "./contacts";

export default function ContactList() {
    const phoneList = useSelector((state) => state.contact.items)
    console.log("phoneList", phoneList)
    const filter = useSelector((state) => state.filter.items); 
  
    const filteredContacts = phoneList.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );


    return (
        <ul>
            {filteredContacts.map((phoneContact) => (
                <li key={phoneContact.id}>
                    <Contacts id={phoneContact.id}
                        name={phoneContact.name}
                        number={phoneContact.number} />
                </li>
            ))}
        </ul>
    )
}