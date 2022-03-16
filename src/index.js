import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DetailsContextProvider } from '../src/context/DetailsContext';

ReactDOM.render(
  <React.StrictMode>
    <DetailsContextProvider>
      <App />
    </DetailsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
