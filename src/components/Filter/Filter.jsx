import { FilterLabel, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selector';
import { setFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleSetFilter = evt => {
    dispatch(setFilterValue(evt.target.value));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <Input type='text' value={value} onChange={handleSetFilter} />
    </FilterLabel>
  );
};

export default Filter;
