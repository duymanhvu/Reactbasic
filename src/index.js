import React from 'react';
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter } from "react-router-dom";

import store from './redux/store';
import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      
        <BrowserRouter>
          <App />
        </BrowserRouter>
      
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();