/**
 *
 * @param state
 * @param action
 * @returns {Array}
 */
function posts(state = [], action) {
	switch (action.type) {
		case 'RECIEVE_POSTS':
			return Object.assign(state, {
				posts: action.posts
			});
			break;

		default:
			return state;
	}
}

export default posts;