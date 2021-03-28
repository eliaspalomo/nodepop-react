import React from 'react';
import T from 'prop-types';
import LoginForm from './LoginForm';
import { login } from '../../../api/auth';

import './LoginPage.css';
import { useAuthContext } from '../context';
import { useHistory, useLocation } from 'react-router';

function LoginPage() {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);
  const firstTime = React.useRef(true);

  const resetError = React.useCallback(() => setError(), []);
  const history = useHistory();
  const location = useLocation();
  const { onLogin } = useAuthContext();

  React.useEffect(() => {
    if (isLogged.current) {
      onLogin();
      const { from } = location.state || { from: { pathname: '/' } };
      
      history.replace(from);
    }
  });

  React.useEffect(() => {
    if (firstTime) {
      firstTime.current = false;
    }
  });

  const handleSubmit = async credentials => {
    console.log(credentials);
    resetError();
    setIsLoading(true);
    try {
      await login(credentials);
      isLogged.current = true;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to NodePop React KC</h1>
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
