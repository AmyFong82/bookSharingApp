import userReducer from './userReducer'
import booksReducer from './booksReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	user: userReducer,
	books: booksReducer
})

export default rootReducer;