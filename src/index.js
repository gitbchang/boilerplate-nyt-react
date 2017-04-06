import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line 
import App from './components/App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import routes from "./config/routes"

// require routing here

ReactDOM.render( 
    <App />,
  document.getElementById('root')
);



