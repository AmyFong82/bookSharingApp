export const request = id => {
	return (dispatch) => {
		dispatch({type: 'SENDING_REQUEST'})
		fetch('http://localhost:3001/api/v1/requests/' + id, {
			method: 'POST',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(user)
		}).then(resp => resp.json())
			.then(respJson => {
			dispatch({type: 'FETCH_BOOKS', booklist: respJson})
		})
	}
}