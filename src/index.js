import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "antd/dist/antd.css";
import {Provider} from 'react-redux';
import { legacy_createStore } from '@reduxjs/toolkit';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/index.js';
// import { BrowserRouter } from 'react-router-dom';
// import {configureStore} from '@reduxjs/toolkit';

//store

const store = legacy_createStore(rootReducer, composeWithDevTools());








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
<Provider store={store}  

>

 
    <App
    
    
    />

    </Provider>
  // </React.StrictMode>

);


reportWebVitals();
