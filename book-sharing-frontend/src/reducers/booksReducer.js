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

		case 'SHOW_BOOK':
			return {
				...state,
				booklist: action.booklist,
				loading: false
			}

		case 'ADD_BOOK':
			return {
				...state,
				booklist: [...state.booklist, action.book],
				loading: false
			}

		case 'UPDATE_BOOK':
			const books = state.booklist.filter(book => book.id !== action.book.id)
			return {
				...state,
				booklist: [books, action.book]
			}


		default:
			return state;
	}
}

export default booksReducer