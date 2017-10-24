import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

import './bootstrap/css/bootstrap.min.css';
import './bootstrap/css/mystyle.css';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,   
    composeEnhacers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={store} ><BrowserRouter><App /></BrowserRouter></Provider>
    , document.getElementById('root'));

