import Contacts from "./contacts";


export default function ContactList({ phoneList, onDelete }) {
    
    return (
        <ul>
            {phoneList.map((phoneContact) => (
                <li key={phoneContact.id}>
                    <Contacts id={phoneContact.id} name={phoneContact.name} number={phoneContact.number} onDelete={onDelete} />
                </li>
            ))}
        </ul>
    )
}