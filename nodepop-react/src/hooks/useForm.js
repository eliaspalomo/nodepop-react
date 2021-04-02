import React from 'react';

const useForm = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = event => {
    setValue(oldValue => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeSelect = event => {
    console.log(event);
    const values = [];

    event.map(tag => {
      values.push(tag.value)
      });

    setValue(oldValue => ({
      ...oldValue,
      tags: values}))

  };

  const handleChangeChecked = event => {
    setValue(oldValue => ({
      ...oldValue,
      [event.target.name]: event.target.checked,
    }));
  };

  const handleSubmit = afterPreventDefault => {
    return ev => {
      ev.preventDefault();
      afterPreventDefault(ev);
    };
  };

  return [value, handleChange, handleChangeChecked, handleChangeSelect, handleSubmit];
};

export default useForm;
