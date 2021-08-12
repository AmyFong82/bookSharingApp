function LoggedIn(props){
	const {currentUser} = props
	if(currentUser.id){
		return true
	}else{
		return false
	}
}

export default LoggedIn