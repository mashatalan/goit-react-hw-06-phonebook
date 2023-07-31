import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { HiTrash } from 'react-icons/hi';

import { Item, Button } from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item>
      <HiUser />
      <span>
        {name}: {number}
      </span>
      <Button type='button' onClick={() => onDeleteContact(id)}>
        <HiTrash />
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
