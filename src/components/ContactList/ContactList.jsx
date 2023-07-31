import ContactItem from 'components/ContactItem';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selector';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};

export default ContactList;
