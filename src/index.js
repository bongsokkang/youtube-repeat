import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers/Reducer';
import App from './App';
import Storage from './utility/Storage';
import { ADD_FAVORITES, REMOVE_FAVORITE } from './actions/Actions';
import './index.css';

const logger = store => next => action => {
	console.log('dispatch', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
};

const updateStorage = store => next => action => {
	const didFavoritesUpdate = (action.type === ADD_FAVORITES ||
		action.type === REMOVE_FAVORITE);
	if(didFavoritesUpdate) {
		let result = next(action);
		Storage.updateFavorites(store.getState().favorites);
		return result;
	} else {
		return next(action);
	}
};

const store = createStore(
	reducer,
	applyMiddleware(logger, updateStorage, thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
