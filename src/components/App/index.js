import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { firebaseInit } from '../../_config/firebase';
import configureStore from '../../_redux/configureStore';
import Routes from './routes';

const App = () => {
  firebaseInit();
  this.store = configureStore();

  return (
    <Provider store={this.store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
