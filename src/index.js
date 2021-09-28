import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Flex from './Flex';

ReactDOM.render(
  <React.StrictMode>
    <Flex>
    <App /> 
    </Flex>
  </React.StrictMode>,
  document.getElementById('root')
);
