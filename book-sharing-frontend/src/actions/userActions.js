export const fetchUser = user => {
	return (dispatch) => {
		dispatch({type: 'AUTHENTICATING'})
		fetch('http://localhost:3001/api/v1/users',{
			method: 'POST',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(user)
		}).then(resp => resp.json())
			.then(respJson => {
			dispatch({type: 'LOGIN_USER', user: respJson})
		})
	}
}