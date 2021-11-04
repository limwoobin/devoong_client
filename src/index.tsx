import React from 'react';
import { render , hydrate } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '@/reducer';
import { rootSaga } from '@/saga';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({ 
	reducer: rootReducer,
	middleware: [sagaMiddleware],
	devTools: true
});

sagaMiddleware.run(rootSaga);

const rootElement = document.getElementById('root');

if (rootElement!.hasChildNodes()) {
	hydrate(
		<Provider store={store}>
				<App />
		</Provider>, 
		rootElement
	);
} else {
	render(
		<Provider store={store}>
				<App />
		</Provider>, 
		rootElement
	);
}

// render(
// 	<Provider store={store}>
// 			<App />
// 	</Provider>, 
// 	rootElement
// );