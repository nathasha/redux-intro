/**
 *
 * @param state
 * @param action
 * @returns {Array}
 */
function subreddit(state = [], action) {
	switch (action.type) {
		case 'REQUEST_POSTS':
			return Object.assign(state, {
				subreddit: action.subreddit
			});
			break;

		default:
			return state;
	}
}

export default subreddit;