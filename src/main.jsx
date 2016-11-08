
require('babel-polyfill');

import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import List from './components/List';
import Single from './components/Single';

// Bring action creators
import {fetchPosts, requestPosts, recievePosts, upvote, downVote} from './actions/actionCreators';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

require('./sass/main.scss');

import { Provider } from 'react-redux';

import store , { history } from './store';

store.dispatch(fetchPosts)/*.then(() => {
	console.log("after fetch " , store.getState());
})*/;

const router = (
 <Router history={browserHistory}>
 	<Route path="/" component={App}>
		<IndexRoute component={List} />
		<Route path="/list/:id" component={Single}/>
	</Route>
 </Router>
);

render(router,
	document.getElementById('root')
);