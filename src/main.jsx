import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import List from './components/List';
import Single from './components/Single';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

require('./sass/main.scss');

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