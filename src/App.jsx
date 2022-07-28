import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import UsersList from './users/UsersList.jsx';
import users from "./users.js";
import './index.scss';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  )
}

export default App;