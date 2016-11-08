import {INCREMENT,DECREMENT} from './actions.jsx';

/**
 * Reducer
 * @param state - current state
 * @param action - new action dispatched
 */
const counter = (state, action) => {
	switch (action.type) {
		case INCREMENT:
			// Returns a new state
			return {
				...state, // Shortcut to  lit the whole state object
				currentValue: action.value
			};

		case DECREMENT:
			return {
				...state, // Shortcut to  lit the whole state object
				currentValue: action.value
			};


		default:
			return state;
			break;
	}

};

export default counter;