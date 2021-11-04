export const login = user => {
	return (dispatch) => {
		dispatch({type: 'AUTHENTICATING'})
		fetch('http://localhost:3001/api/v1/login',{
			method: 'POST',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(user)
		}).then(resp => resp.json())
			.then(respJson => {
				if (respJson.details){
					dispatch({type: 'LOGIN_USER', respJson})
				}else{
					dispatch({type: 'LOGIN_FAILED', loginStatus: respJson.message})
				}
			})
	}
}

export const signup = user => {
	return (dispatch) => {
		dispatch({type: 'REGISTERING'})
		fetch('http://localhost:3001/api/v1/signup',{
			method: 'POST',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(user)
		}).then(resp => resp.json())
			.then(respJson => {
				if (respJson.details){
					dispatch({type: 'SIGNUP_USER', respJson})
				}else{
					dispatch({type: 'SIGNUP_FAILED', loginStatus: respJson.error})
				}
			})
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT_USER'
	}
}

export const addBook = book => {
	return(dispatch) => {
		fetch(`http://localhost:3001/api/v1/users/${book.user_id}/books`,{
			method: 'POST',
			headers: {
			Authorization: `Bearer ${book.jwt}`,
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(book)
		}).then(resp => resp.json())
		.then(respJson => {
			dispatch({type: 'ADD_BOOK', book: respJson})
			dispatch({type: 'SHOW_BOOK', book: respJson})
		})
	}
}


export const updateBook = book => {
	return {
		type: 'UPDATE_BOOK',
		book
	}
}

export const request = details => {
	return (dispatch) => {
		let jwt = details.jwt
		fetch('http://localhost:3001/api/v1/requests', {
			method: 'POST',
			headers: {
			Authorization: `Bearer ${jwt}`,
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(details)
		}).then(resp => resp.json())
		.then(respJson => {
			if(respJson){
				dispatch({type: 'SUBMIT_REQUEST', request: respJson})
			}
			return(respJson.message)
		})
	}
}

export const cancelRequest = book_id => {
	return (dispatch) => {
		dispatch({type: 'LOAD_REQUEST'})
		fetch(`http://localhost:3001/api/v1/requests/${book_id}`, {
			method: 'DELETE',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(book_id)
		}).then(resp => resp.json())
		.then(respJson => {
			if(respJson.message){
				console.log(respJson.message)
				dispatch({type: 'CANCEL_REQUEST', book_id: book_id})
			}
			return(respJson.message)
		})
	}
}