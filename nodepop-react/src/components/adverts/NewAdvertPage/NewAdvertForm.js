import React from 'react';
import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import SelectedTag from '../../shared/SelectedTag';
import useForm from '../../../hooks/useForm';

const NewAdvertForm = ({ onSubmit }) => {
  const [advert, handleChange, handleChangeChecked, handleChangeSelect, handleSubmit] = useForm({});
  
  const afterPreventDefault = ev => {
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
      <SelectedTag
        name="tags"
        label="Tags"
        className="selectedTag-field"
        onChange={handleChangeSelect}
      />
      <FormField
        type="number"
        name="price"
        label="Price"
        className="loginForm-field"
        onChange={handleChange}
      />
      <input 
        type="file"
        name="photo"
        accept="image/*"
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
