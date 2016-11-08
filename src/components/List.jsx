import React from 'react';
import { render } from 'react-dom';

import { Link } from 'react-router';


class List extends React.Component {

	render() {

		return (
			<div>
				List of children
				<Link to="/list/1">List 1</Link>
				<Link to="/list/2">List 2</Link>
				<Link to="/list/3">List 3</Link>
			</div>
		);

	}

}

export default List;