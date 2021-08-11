function LoggedIn(props){
	const {currentUser} = props
	return <h3>{currentUser.id}</h3>
}

export default LoggedIn