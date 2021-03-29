import React from 'react';
import T from 'prop-types';
import storage from '../../../utils/storage';

import Button from '../../shared/Button';
import FormField from '../../shared/FormField';
import useForm from '../../../hooks/useForm';

import './LoginForm.css';

function LoginForm({ onSubmit, isLoading }) {
  const initEmail = (storage.get('email')?storage.get('email'):'');
  const initPassword = (storage.get('password')?storage.get('password'):'')
  
  const [credentials, handleChange, handleChangeChecked, handleSubmit] = useForm({
    email: initEmail,
    password: initPassword,
    session: false,
  });

  const handleFormSubmit = ev => {
    onSubmit(credentials);
  };

  const { email, password, session } = credentials;
  
  return (
    <form className="loginForm" onSubmit={handleSubmit(handleFormSubmit)}>
      <FormField
        type="text"
        name="email"
        label="email"
        className="loginForm-field"
        value={email}
        onChange={handleChange}
        autofocus
      />
      <FormField
        type="password"
        name="password"
        label="password"
        className="loginForm-field"
        value={password}
        onChange={handleChange}
      />
      <FormField
        type="checkbox"
        name="session"
        label="session"
        className="loginForm-field"
        checked={session}
        onChange={handleChangeChecked}
      />
      <Button
        type="submit"
        className="loginForm-submit"
        variant="primary"
        disabled={isLoading || !email || !password}
      >
        Log in
      </Button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
  isLoading: T.bool,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default LoginForm;
