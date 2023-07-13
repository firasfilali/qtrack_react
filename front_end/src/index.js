import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/reducer';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
  </Provider>
);

