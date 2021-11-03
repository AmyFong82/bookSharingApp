const booksReducer = (state = { booklist: [], currentBook: [], loading: false}, action) => {
	switch(action.type) {
		case 'LOADING_BOOKS':
			return {
				...state,
				loading: true
			}

		case 'FETCH_BOOKS':
			return {
				...state,
				booklist: action.booklist,
				loading: false
			}

		case 'SHOW_BOOK':
			return {
				...state,
				message: [],
				currentBook: action.book,
				loading: false
			}

		case 'ERROR':
			return {
				...state,
				message: action.message,
				loading: false
			}

		default:
			return state;
	}
}

export default booksReducer