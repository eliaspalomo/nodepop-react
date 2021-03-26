import React from 'react';

const useForm = initialValue => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = event => {
    setValue(oldValue => ({
      ...oldValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = afterPreventDefault => {
    return ev => {
      ev.preventDefault();
      afterPreventDefault(ev);
    };
  };

  return [value, handleChange, handleSubmit];
};

export default useForm;
