const userReducer = (state = { user: [], authenticating: false}, action) => {
	switch(action.type) {
		case 'AUTHENTICATING':
			return {
				...state,
				user: [...state.user],
				authenticating: true
			}

		case 'ADD_USER':
			return {
				...state,
				user: action.user,
				authenticating: false
			}

		default:
			return state;
	}
}

export default userReducer