const userReducer = 
	(state = { 
		loginStatus: "NOT_LOGGED_IN",
      	details: {},
      	books: [],
      	requests: []
		}, action
	) => {
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

		case 'SIGNUP_USER':
			return {
				...state,
				loginStatus: "LOGGED_IN",
				details: action.respJson.details,
				jwt: action.respJson.jwt
			}

		case 'LOGIN_USER':
			return {
					loginStatus: "LOGGED_IN",
					details: action.respJson.details,
					jwt: action.respJson.jwt,
					books: action.respJson.books,
					requests: action.respJson.requests
				}

		case 'ADD_BOOK':
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

		case 'LOGOUT_USER':
			return {
				loginStatus: "LOGGED_OUT",
				details: {},
				jwt: "",
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

		case 'SUBMIT_REQUEST':
			return {
				...state,
				requests: [...state.requests, action.request]
			}

		case 'LOAD_REQUEST':
			return state;

		case 'LOADING_USER':
			return state;



		case 'CANCEL_REQUEST':
			const requests = state.requests.filter(request => request.id !== action.book_id)
			return {...state, requests }

		default:
			return state;
	}
}

export default userReducer