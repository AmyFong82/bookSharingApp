export const fetchBooks = () => {
	return (dispatch) => {
		dispatch({type: 'LOADING_BOOKS'})
		fetch('http://localhost:3001/api/v1/books').then(resp => resp.json())
			.then(respJson => {
			dispatch({type: 'FETCH_BOOKS', booklist: respJson})
		})
	}
}

export const fetchBook = () => {
	return (dispatch) => {
		dispatch({type: 'LOADING_BOOKS'})
		fetch(`http://localhost:3001/api/v1/books/:id`).then(resp => resp.json())
			.then(respJson => {
				console.log(respJson)
			dispatch({type: 'FETCH_BOOK', book: respJson})
		})
	}
}