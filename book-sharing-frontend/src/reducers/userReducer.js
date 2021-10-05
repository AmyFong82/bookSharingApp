const userReducer = (
	state = { 
		loginStatus: "NOT_LOGGED_IN",
      	details: {},
      	books: [],
      	requests: []
		}, action) => {
	switch(action.type) {
		case 'AUTHENTICATING':
			return {
				...state,
				loginStatus: "AUTHENTICATING"
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

		case 'ADD_USER_NEW_BOOK':
			return {
				...state,
				books: [...state.books, action.book]
			}

		case 'UPDATE_BOOK':
			const books = state.books.filter(book => book.id !== action.book.id)
			books.push(action.book)			
			return {...state, books}

		case 'DELETE_BOOK':
			const remaining_books = state.books.filter(book => book.id !== action.book.id)
			return {
					...state, 
					books: remaining_books
				}

		case 'SIGNUP_USER':
			return {
				...state,
				loginStatus: "LOGGED_IN",
				details: action.details
			}

		case 'LOGOUT_USER':
			return {
				loginStatus: "LOGGED_OUT",
				details: {},
				books: [],
				requests: []
			}

		case 'LOGIN_FAILED':
			return {
				...state,
				loginStatus: action.loginStatus,
			}

		case 'SIGNUP_FAILED':
			return {
				...state,
				loginStatus: action.loginStatus,
			}

		case 'LOAD_REQUEST':
			return state;

		case 'LOADING_USER':
			return state;

		case 'SUBMIT_REQUEST':
			return {
				...state,
				requests: [...state.requests, action.request]
			}

		case 'CANCEL_REQUEST':
			const requests = state.requests.filter(request => request.id !== action.book_id)
			return {...state, requests }

		default:
			return state;
	}
}

export default userReducer