import userReducer from './userReducer'
import booksReducer from './booksReducer'
import requestsReducer from './requestsReducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user']
}

const rootReducer = combineReducers({
	user: userReducer,
	requests: requestsReducer,
	books: booksReducer,
})

export default persistReducer(persistConfig, rootReducer);