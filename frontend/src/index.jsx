import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App2 from './App2';
import Store from './redux/Store';

ReactDOM.render(
  <Provider Store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
