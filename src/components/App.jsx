import React from 'react';
import {render} from 'react-dom';

/**
 * This is the parent component for the route
 *  Router will figure out the which child component to render, based on the path
 *  Use React.cloneElement to pass down any props from the parent
 */
class App extends React.Component {

	render() {

		return (
			<div>
				<div className="logo"></div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);

	}

}

export default App;