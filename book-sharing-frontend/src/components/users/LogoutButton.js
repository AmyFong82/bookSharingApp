import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function LogoutButton(props){

  const handleLogout = event => {
    console.log("I'm here")
    event.preventDefault()
    props.logout()

  }

	return(
		<Form onSubmit={handleLogout}>
			<Button variant="outline-primary" type="submit">Logout</Button>
		</Form>
	)
}

export default LogoutButton