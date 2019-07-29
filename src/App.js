import React from 'react';
import { BrowserRouter } from 'react-router-dom';
/* Importação do Provider do react-redux para deixa-lo disponível para toda a aplicação. */
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import GlobalStyle from './styles/globals';
import Header from './components/Header';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
