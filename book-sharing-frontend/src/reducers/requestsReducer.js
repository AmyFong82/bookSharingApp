const requestsReducer = (state = { book_ids: []}, action) => {
	switch(action.type) {
		case 'LOAD_REQUEST':
			return {
				...state,
				book_ids: [...state.book_ids],
			}

		case 'ADD_REQUEST':
			return {
				...state,
				book_ids: [...state.book_ids, action.book_id],
			}

		case 'DELETE_REQUEST':
				const book_ids = state.book_ids.filter(book => book.id !== action.id)
				return {...state, book_ids}

		default:
			return state;
	}
}

export default requestsReducer