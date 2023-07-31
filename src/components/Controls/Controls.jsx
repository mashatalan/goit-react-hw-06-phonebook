import PropTypes from 'prop-types';
import { ControlWrapper, Button } from './Controls.styled';
import { HiTrash } from 'react-icons/hi';

export const Controls = ({ id, onDeleteContact, onEditContact }) => {
  return (
    <ControlWrapper>
      <Button type="button" onClick={onEditContact}>
        Edit
      </Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <HiTrash />
        Delete
      </Button>
    </ControlWrapper>
  );
};

export const ControlsSave = ({ id, onDeleteContact }) => {
  return (
    <ControlWrapper>
      <Button type="submit">Save</Button>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        <HiTrash />
        Delete
      </Button>
    </ControlWrapper>
  );
};

Controls.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onEditContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

ControlsSave.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
