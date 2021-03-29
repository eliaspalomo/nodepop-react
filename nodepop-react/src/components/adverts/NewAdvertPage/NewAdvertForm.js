import React from 'react';
import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import useForm from '../../../hooks/useForm';

const NewAdvertForm = ({ onSubmit }) => {
  const [advert, handleChange, handleChangeChecked, handleSubmit] = useForm({ content: '' });
  
  const afterPreventDefault = ev => {
    console.log(ev);
    onSubmit(advert);
  };

  const {name, sale, price, tags, photo } = advert;
  const handle = handleSubmit(afterPreventDefault);

  return (
    <form onSubmit={handle}>
      <FormField
        type="text"
        name="name"
        label="Name"
        className="advertForm-field"
        onChange={handleChange}
        autofocus
      />
      <FormField
        type="checkbox"
        name="sale"
        label="Sale?"
        className="advertForm-field"
        onChange={handleChangeChecked}
      />
      <FormField
        type="number"
        name="price"
        label="Price"
        className="loginForm-field"
        onChange={handleChange}
      />
      <div className="newAdvertPage-footer">
        <Button
          type="submit"
          className="newAdvertPage-submit"
          variant="primary"
          disabled={!name || !price || !tags}
        >
          Add advert
        </Button>
      </div>
    </form>
  );
};

export default NewAdvertForm;
