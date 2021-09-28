import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/userActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function SignupForm(props) {

	const [details, setDetails] = useState({username: "", email: "", password: ""})
	const [alert, setAlert] = useState(false)

	const handleOnChange = event => {
	    setDetails({
	    	...details,
	      [event.target.name]: event.target.value
	    });
	}

	const handleSubmit = event => {
		event.preventDefault()
		props.signup({user: details})
	}

	return(
		<div className="col m-5">
		<h5 className="bg-primary">New User</h5>
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

			  <Form.Group className="mb-3" controlId="formBasicUsername">
				  <FloatingLabel label="Email" className="mb-3">
				    <Form.Control 
				    	type="email" 
				    	placeholder="Email"
				    	onChange={handleOnChange}
				    	name='email'
				    	value={details.email}
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

			  <Button variant="primary" type="submit" onClick={() => setAlert(true)}>
			    Sign Up
			  </Button>
			</Form>
			<br />
			{ (alert) ? <Alert variant="primary" onClose={() => setAlert(false)} dismissible>{props.loginStatus}</Alert> : null }
		</div>
	)
}

export default connect(null, {signup})(SignupForm)