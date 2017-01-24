import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './containers/app/App';
import initialState from './store/initialState';
import reducers from './reducers';
import sagas from './sagas';

const root = document.querySelector('.root');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers, 
    initialState,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(sagas);


render(
    <Provider store={store}>
        <App />
    </Provider>, 
    root
);