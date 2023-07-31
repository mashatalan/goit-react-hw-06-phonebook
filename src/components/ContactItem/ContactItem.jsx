import { useState } from 'react';
import PropTypes from 'prop-types';
import { HiUser } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import {
  Item,
  ContactTel,
  ContactName,
  ContactInfo,
} from 'components/ContactItem/ContactItem.styled';
import { Controls, ControlsSave } from 'components/Controls/Controls';
import EditForm from 'components/EditForm';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contactsSlice';

function ContactItem({ name, number, id }) {
  const [editName, setEditName] = useState(name);
  const [editNumber, setEditNumber] = useState(number);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const handleEditContact = (newName, newNumber) => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setEditName(newName);
      setEditNumber(newNumber);
      setIsEdit(false);

      dispatch(
        editContact({
          id,
          name: newName,
          number: newNumber,
        })
      );
    }
  };

  return (
    <Item>
      {/* if contact saved show contact info */}

      {!isEdit && (
        <ContactInfo>
          <ContactName>
            <HiUser />
            {editName}:
          </ContactName>

          <ContactTel>
            <ImPhone />
            {editNumber}
          </ContactTel>
        </ContactInfo>
      )}

      {/* if contact is edit show edit form */}
      {isEdit && (
        <EditForm
          name={editName}
          number={editNumber}
          onEditContact={handleEditContact}
        >
          <ControlsSave id={id} onDeleteContact={handleDeleteContact} />
        </EditForm>
      )}

      {!isEdit && (
        <Controls
          id={id}
          onDeleteContact={handleDeleteContact}
          onEditContact={handleEditContact}
        />
      )}
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
