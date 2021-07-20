export const fetchBooks = () => {
	return (dispatch) => {
		dispatch({type: 'LOADING_BOOKS'})
		fetch('http://localhost:3000/api/v1/books').then(resp => {
			return resp.json()
		}).then(respJson => {
			dispatch({type: 'ADD_BOOKS', books: respJson.title})
		})
	}
}