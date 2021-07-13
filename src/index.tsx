import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer , { rootSaga } from './reducer/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    // devTools: process.env.NODE_ENV !== 'production'
    devTools: true
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);