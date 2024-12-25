import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

import defaultContactList from '../contact-list.json'

import { useState } from 'react';

const App = () => { 

    const [contacts, setContacts] = useState(defaultContactList);
    const [searchData, setSearchData] = useState("")
    

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox
                searchData={searchData}
                setSearchData={setSearchData} />
            <ContactList contactList={contacts} />
        </>
    );
};
export default App;