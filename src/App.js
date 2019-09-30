import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Routes from '~/routes';
import store from './store';
import Global from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <>
        <Routes />
        <Global />
        <ToastContainer />
      </>
    </Provider>
  );
}

export default App;
