import React from 'react';
import ReactDOM from 'react-dom';
import {index} from './store';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <Provider store={index}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);