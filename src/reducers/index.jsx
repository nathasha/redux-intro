import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import posts from './posts';
import subreddit from './subreddit';

const rootReducer = combineReducers({
	posts,
	subreddit,
	routing: routerReducer});

export default rootReducer;