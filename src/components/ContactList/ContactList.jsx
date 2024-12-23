import s from './ContactList.module.css'
import { useState } from 'react'
import Contact from './Contact/Contact'

const defListState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const ContactList = () => {
    const [contacts, setContacts] = useState(defListState);

    return (
        <ul className={s.contactList}>
            {contacts.map(item => (<Contact key={item.id} {...item}/>))}
        </ul>
    )  
}

export default ContactList;