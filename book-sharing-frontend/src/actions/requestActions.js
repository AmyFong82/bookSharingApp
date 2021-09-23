// export const request = details => {
// 	return (dispatch) => {
// 		dispatch({type: 'SENDING_REQUEST'})
// 		fetch('http://localhost:3001/api/v1/requests/', {
// 			method: 'POST',
// 			headers: {
// 			"Content-Type": "application/json",
//     		"Accept": "application/json"
// 			},
// 			body: JSON.stringify(details)
// 		}).then(resp => resp.json())
// 			.then(respJson => {
// 			dispatch({type: 'FETCH_BOOKS', booklist: respJson})
// 		})
// 	}
// }

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
			if(respJson.book_id){
				dispatch({type: 'ADD_REQUEST', book_id: respJson.book_id})

			}
			return(respJson.message)
		})
	}
}