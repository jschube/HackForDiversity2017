import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



ReactDOM.render(
  <App google={window.google} />,
  document.getElementById('root')
);
