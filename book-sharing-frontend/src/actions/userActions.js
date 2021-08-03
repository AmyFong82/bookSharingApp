export const Login = user => {
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
				if (respJson.user){
					dispatch({type: 'LOGIN_USER', currentUser: respJson})
				}else{
					console.log("Incorrect Login Info")
				}
			})
		// .catch((error) => {
		// 	console.log("Incorrect Login Info")
		// })

	}
}