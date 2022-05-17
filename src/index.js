import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import THE_BIRDS from './data/birds';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App birds={THE_BIRDS} />
  </React.StrictMode>,
  document.getElementById('root')
);