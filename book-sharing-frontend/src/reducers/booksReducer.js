const booksReducer = (state = { booklist: [], loading: false}, action) => {
	switch(action.type) {
		case 'LOADING_BOOKS':
			return {
				...state,
				booklist: [...state.booklist],
				loading: true
			}

		case 'FETCH_BOOKS':
			return {
				...state,
				booklist: action.booklist,
				loading: false
			}

		case 'FETCH_BOOK':
			return {
				...state,
				booklist: action.book,
				loading: false
			}

		default:
			return state;
	}
}

export default booksReducer