
const initialState = {
	username: null,
	uid: null,
	status: 'AUTH_MEDIA_ANONYMOUS',
};

export default (state, action) => {
	switch (action.type) {
		case 'AUTH_MEDIA_OPEN':
			return {
				status: 'AUTH_MEDIA_AWAITING_RESPONSE',
				username: 'guest',
				uid: null
			};
		case 'AUTH_MEDIA_LOGIN':
			return {
				status: 'AUTH_MEDIA_LOGGED_IN',
				username: action.username,
				uid: action.uid
			};
		case 'AUTH_MEDIA_LOGOUT':
			return {
				status: 'AUTH_MEDIA_ANONYMOUS',
				username: 'guest',
				uid: null
			};
		default: return state || initialState;
	}
};
