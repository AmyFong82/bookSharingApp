export const fetchBooks = () => {
	return (dispatch) => {
		dispatch({type: 'LOADING_BOOKS'})
		fetch('http://localhost:3001/api/v1/books').then(resp => resp.json())
			.then(respJson => {
			dispatch({type: 'FETCH_BOOKS', booklist: respJson})
		})
	}
}


export const addBook = book => {
	return(dispatch) => {
		dispatch({type: 'LOADING_BOOKS'})
		fetch(`http://localhost:3001/api/v1/users/${book.user_id}/books`,{
			method: 'POST',
			headers: {
			"Content-Type": "application/json",
    		"Accept": "application/json"
			},
			body: JSON.stringify(book)
		}).then(resp => resp.json())
		.then(respJson => {
			console.log(respJson)
			dispatch({type: 'ADD_BOOK', book: respJson})
		})
	}
}