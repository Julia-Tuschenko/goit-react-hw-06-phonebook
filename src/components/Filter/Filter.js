import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../redux/contacts/contactsActions";
import { LabelContact, InputContact } from './Filter.styled';

function Filter() {
  const filterValue= useSelector((state) => state.contacts.filter);
  // console.log(filterValue);
  const dispatch = useDispatch();

  return (
    <LabelContact>
      Find contacts by name
      <InputContact type="text" 
      name="filter" 
      value={filterValue} 
      onChange={(e) => dispatch(changeFilter(e.target.value))} />
    </LabelContact>
  );
}

export default Filter;
