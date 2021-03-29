import React from 'react';
import T from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { AdvertsPage, NewAdvertPage, AdvertDetailPage } from './components/adverts';
import { AuthContextProvider } from './components/auth/context';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const ref = React.useRef(null);

  React.useEffect(() => {
    
  }, []);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => setIsLogged(false);

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return (
    <div className="App">
      <AuthContextProvider value={authValue}>
        <Switch>
          <PrivateRoute path="/advert/:advertId">
            {routeProps => <AdvertDetailPage ref={ref} {...routeProps} />}
          </PrivateRoute>
          <PrivateRoute path="/adverts">
            <AdvertsPage />
          </PrivateRoute>
          <PrivateRoute path="/newadvert">
            <NewAdvertPage />
          </PrivateRoute>

          <Route path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/404">
            <div
              style={{
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
              }}
            >
              404 | Not found page
            </div>
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool.isRequired,
};

export default App;
