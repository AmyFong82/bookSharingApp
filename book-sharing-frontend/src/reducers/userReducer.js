const userReducer = (
	state = { 
		loginStatus: "NOT_LOGGED_IN",
      	details: {},
      	books: {},
      	requests: []
		}, action) => {
	switch(action.type) {
		case 'AUTHENTICATING':
			return {
				loginStatus: "AUTHENTICATING",
				details: state.details
			}

		case 'REGISTERING':
			return {
				...state,
				loginStatus: "REGISTERING"
			}

		case 'LOGIN_USER':
			return {
				...state,
				loginStatus: "LOGGED_IN",
				details: action.details,
				books: action.books,
				requests: action.requests
			}

		case 'SIGNUP_USER':
			return {
				loginStatus: "LOGGED_IN",
				details: action.details
			}

		case 'LOGOUT_USER':
			return {
				loginStatus: "LOGGED_OUT",
				details: {},
			}

		case 'LOGIN_FAILED':
			return {
				loginStatus: action.loginStatus,
				details: {}
			}

		case 'SIGNUP_FAILED':
			return {
				loginStatus: action.loginStatus,
				details: {}
			}

		case 'LOAD_REQUEST':
			return state;


		case 'SUBMIT_REQUEST':
			return {
				...state,
				requests: [...state.requests, action.request]
			}


		default:
			return state;
	}
}

export default userReducer