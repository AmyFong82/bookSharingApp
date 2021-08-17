import Button from 'react-bootstrap/Button'

function LoginButton(props){
	if(window.location.pathname === '/login'){
		return null
	}
	return(
		<Button href="/login" variant="outline-primary" id="loginBtn">Login / Sign Up</Button>
	)
}

export default LoginButton