import userReducer from './userReducer'
import booksReducer from './booksReducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'books']
}

const rootReducer = combineReducers({
	user: userReducer,
	books: booksReducer
})

export default persistReducer(persistConfig, rootReducer);