const userReducer = (
	state = { 
		loggedInStatus: "NOT_LOGGED_IN",
      	currentUser: {},
		}, action) => {
	switch(action.type) {
		case 'AUTHENTICATING':
			return {
				...state,
				currentUser: state.currentUser
			}

		case 'LOGIN_USER':
			return {
				loggedInStatus: "LOGGED_IN",
				currentUser: action.currentUser
			}

		case 'LOGOUT_USER':
			return {
				loggedInStatus: "LOGGED_OUT",
				currentUser: {}
			}

		default:
			return state;
	}
}

export default userReducer