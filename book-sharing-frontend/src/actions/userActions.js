export const fetchUser = () => {
	return (dispatch) => {
		dispatch({type: 'AUTHENTICATING'})
		const data = {username: , password: }
		fetch('http://localhost:3001/api/v1/users',{
			method: 'POST',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(data)
		}).then(resp => resp.json())
			.then(respJson => {
			dispatch({type: 'ADD_BOOKS', books: respJson})
		})
	}
}