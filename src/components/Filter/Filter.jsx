import PropTypes from 'prop-types';
import { FilterLabel, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <Input type='text' value={value} onChange={onChange} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
