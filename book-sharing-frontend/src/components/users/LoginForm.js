import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { login } from '../../actions/userActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function LoginForm(props) {

	const [details, setDetails] = useState({username: "", password: ""})

	const [loggedIn, setLoggedIn] = useState("NOT_LOGGED_IN")


	const handleOnChange = event => {
	    setDetails({
	    	...details,
	      [event.target.name]: event.target.value
	    });
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.login(details)
	}

	return(
		<Form onSubmit={handleSubmit}>
		  <Form.Group className="mb-3" controlId="formBasicUsername">
			  <FloatingLabel label="Username" className="mb-3">
			    <Form.Control 
			    	type="text" 
			    	placeholder="Username"
			    	onChange={handleOnChange}
			    	name='username'
			    	value={details.username}
			    	required />
			  </FloatingLabel>
		  </Form.Group>

			  <Form.Group className="mb-3" controlId="formBasicPassword">
			  <FloatingLabel label="Password">
			    <Form.Control 
			    	type="password" 
			    	placeholder="Password"
			    	onChange={handleOnChange}
			    	name='password'
			    	value={details.password}
			    	required />
			  </FloatingLabel>
		  </Form.Group>

		  <Button variant="primary" type="submit">
		    Login
		  </Button>
		</Form>
	)
}

export default connect(null, {login})(LoginForm)