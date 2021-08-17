import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";

function LogoutButton(props){

	const history = useHistory();

  const handleLogout = event => {
    event.preventDefault()
    props.logout()
    history.push("/");
  }

	return(
		<Form onSubmit={handleLogout}>
			<Button variant="outline-primary" type="submit">Logout</Button>
		</Form>
	)
}

export default LogoutButton