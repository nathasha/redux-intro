import fetch from 'isomorphic-fetch'

/**
 *
 * @param index - post index
 * @returns {{type: string, index: *}}
 */
export function upvote(index) {
	return {
		type : 'UPVOTE_POST',
		index
	};
}

export function downVote(index) {
	return {
		type : 'DOWNVOTE_POST',
		index
	};
}

export function requestPosts(subreddit) {
	return {
		type : 'REQUEST_POSTS',
		subreddit
	};
}

export function recievePosts(subreddit, json) {
	return {
		type : 'RECEIVE_POSTS',
		subreddit,
		posts : json
	};
}

// thunk action creator
// store.dispatch(fetchPosts('cats'));
export function fetchPosts(subreddit) {

	// Thunk middleware passes the 'dispatch' method as an argument to the function,
	// so we can dispatch later.
	return function(dispatch) {
		let api = `https://www.reddit.com/r/{subreddit}.json?limit=3`;

		// update the state to inform the API call is starting
		dispatch('REQUEST_POSTS', subreddit);

		return fetch(api)
			.then(response => {
				return response.json();
			})
			.then(json => {
					console.log("Received posts!");
					dispatch('RECEIVE_POSTS', json);
				}
			);

	}

}