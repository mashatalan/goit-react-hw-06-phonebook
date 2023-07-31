import PropTypes from 'prop-types';
import React from 'react';
import { HiUser } from 'react-icons/hi';
import { ImPhone } from 'react-icons/im';
import { Formik, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  EditFormStyled,
  EditInput,
  EditFormLabel,
  CustomError,
  EditFormWrapper,
} from './EditForm.styled';

// const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

let userValidSchema = object({
  // name: string().matches(nameRegExp, 'Name is not valid!').required(),
  number: string()
    .matches(phoneRegExp, 'Phone number is not valid!')
    .required(),
});

export const EditForm = ({ name, number, onEditContact, children }) => {
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    onEditContact(name, number);
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name, number }}
      validationSchema={userValidSchema}
      onSubmit={handleSubmit}
    >
      <EditFormStyled autoComplete='off'>
        <EditFormWrapper>
          <EditFormLabel>
            <HiUser fill='red' />
            <EditInput
              type='text'
              name='name'
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <ErrorMessage component={CustomError} name='name' />
          </EditFormLabel>
          <EditFormLabel>
            <ImPhone fill='plum' />
            <EditInput
              type='tel'
              name='number'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            />
            <ErrorMessage component={CustomError} name='number' />
          </EditFormLabel>
        </EditFormWrapper>
        {children}
      </EditFormStyled>
    </Formik>
  );
};

EditForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.node,
  onEditContact: PropTypes.func.isRequired,
};

export default EditForm;
