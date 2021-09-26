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
					dispatch({type: 'LOGIN_USER', details: respJson.details, books: respJson.books, requests: respJson.requests })
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
					dispatch({type: 'SIGNUP_USER', details: respJson.details})
				}else{
					dispatch({type: 'SIGNUP_FAILED', loginStatus: respJson.message})
				}
			})
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT_USER'
	}
}

export const request = details => {
	return (dispatch) => {
		dispatch({type: 'LOAD_REQUEST'})
		fetch('http://localhost:3001/api/v1/requests', {
			method: 'POST',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(details)
		}).then(resp => resp.json())
		.then(respJson => {
			if(respJson.request){
				dispatch({type: 'SUBMIT_REQUEST', request: respJson.request})
			}
			return(respJson.message)
		})
	}
}