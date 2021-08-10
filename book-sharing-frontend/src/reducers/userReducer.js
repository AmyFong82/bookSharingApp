const userReducer = (
	state = { 
		loginStatus: "NOT_LOGGED_IN",
      	currentUser: {},
		}, action) => {
	switch(action.type) {
		case 'AUTHENTICATING':
			return {
				loginStatus: "AUTHENTICATING",
				currentUser: state.currentUser
			}

		case 'LOGIN_USER':
			return {
				loginStatus: "LOGGED_IN",
				currentUser: action.currentUser
			}

		case 'LOGOUT_USER':
			return {
				loginStatus: "LOGGED_OUT",
				currentUser: {}
			}

		case 'LOGIN_FAILED':
			return {
				loginStatus: action.loginStatus,
				currentUser: {}
			}

		default:
			return state;
	}
}

export default userReducer