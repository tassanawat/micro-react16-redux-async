import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import 'typeface-roboto';
import './style.css';
import App from './App';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import userReducer from './store/reducers/user';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer,
    users: userReducer
});

//DevTools when using middlware
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk, logger)));

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
