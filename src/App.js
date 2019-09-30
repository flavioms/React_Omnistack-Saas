import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import history from './services/history';
import Routes from '~/routes';
import store from './store';
import Global from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <Global />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
