const booksReducer = (state = { books: [], loading: false}, action) => {
	switch(action.type) {
		case 'LOADING_BOOKS':
			return {
				...state,
				books: [...state.cats],
				loading: true
			}

		case 'FETCH_BOOKS':
			return {
				...state,
				books: action.books,
				loading: false
			}

		default:
			return state;
	}
}

export default booksReducer