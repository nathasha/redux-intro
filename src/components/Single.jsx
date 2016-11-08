import React from 'react';
import { render } from 'react-dom';

import { Link } from 'react-router';


class Single extends React.Component {

	render() {

		return (
			<div>
				I am child {this.props.params.id}
			</div>
		);

	}

}

export default Single;