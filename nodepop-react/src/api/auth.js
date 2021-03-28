import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const login = credentials => {
  return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
    configureClient({ accessToken });
    if (credentials.session) { 
      storage.set('email', credentials.email);
      storage.set('password', credentials.password);
      storage.set('auth', accessToken);
    } else {
      storage.remove('email');
      storage.remove('password');
      storage.remove('auth');
    };
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('email');
    storage.remove('password');
    storage.remove('auth');
  });
};
