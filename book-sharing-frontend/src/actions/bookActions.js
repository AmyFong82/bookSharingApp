export const fetchBooks = () => {
	return (dispatch) => {
		dispatch({type: 'LOADING_BOOKS'})
		fetch('http://localhost:3001/api/v1/books').then(resp => resp.json())
			.then(respJson => {
			dispatch({type: 'FETCH_BOOKS', booklist: respJson})
		})
	}
}

//Not done yet, check the code:
// export const showBook = () => {
// 	return (dispatch) => {
// 		dispatch({type: 'LOADING_BOOK'})
// 		fetch(`http://localhost:3001/api/v1/books/:id`).then(resp => resp.json())
// 			.then(respJson => {
// 			dispatch({type: 'FETCH_BOOKS', booklist: respJson})
// 		})
// 	}
// }