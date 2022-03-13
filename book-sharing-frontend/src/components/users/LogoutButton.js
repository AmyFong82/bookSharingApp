import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/bookActions'



function LogoutButton(props){

	const history = useHistory();

  const handleLogout = event => {
    event.preventDefault()
    props.logout()
		props.fetchBooks()
    history.push("/");
  }

	return(
		<Form onSubmit={handleLogout}>
			<Button variant="outline-primary" type="submit">Logout</Button>
		</Form>
	)
}



export default connect(null, {fetchBooks})(LogoutButton)