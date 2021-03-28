import React from 'react';

const useForm = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = event => {
    setValue(oldValue => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
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

  return [value, handleChange, handleChangeChecked, handleSubmit];
};

export default useForm;
