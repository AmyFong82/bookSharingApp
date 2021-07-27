const userReducer = (state = { current_user: [], authenticating: false}, action) => {
	switch(action.type) {
		case 'AUTHENTICATING':
			return {
				...state,
				current_user: [...state.current_user],
				authenticating: true
			}

		case 'LOGIN_USER':
			return {
				...state,
				current_user: action.current_user,
				authenticating: false
			}

		default:
			return state;
	}
}

export default userReducer