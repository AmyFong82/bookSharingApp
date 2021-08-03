const userReducer = (
	state = { 
		loggedInStatus: "NOT_LOGGED_IN",
      	user: {},
		}, action) => {
	switch(action.type) {
		case 'AUTHENTICATING':
			return {
				...state,
				user: [state.user],
				authenticating: true
			}

		case 'LOGIN_USER':
			return {
				loggedInStatus: "LOGGED_IN",
				user: action.currentUser,
					authenticating: false
			}

		default:
			return state;
	}
}

export default userReducer