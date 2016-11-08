/**
 Redux store
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Reducer
import rootReducer from './reducers/index';


//default stte
const defaultState = {
	posts : [],
	subreddit : 'babyelephants'
};

const store = createStore(rootReducer, defaultState,  applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
