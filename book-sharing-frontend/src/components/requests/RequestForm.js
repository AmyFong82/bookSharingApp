import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/userActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function RequestForm(props) {

	const [details, setDetails] = useState({userid: "", bookid: "", date_requested: "", acquire_method: "", address: ""})

	const handleOnChange = event => {
	    setDetails({
	    	...details,
	      [event.target.name]: event.target.value
	    });
	}

	const handleSubmit = event => {
		event.preventDefault()
		props.requestBook({request: details})
	}

	return(
		<div className="col m-5">
			<h5>Request Form</h5>
			<Form onSubmit={handleSubmit}>
			  <Form.Group className="mb-3" controlId="formBasicAcquireMethod">
			    	<Form.Label>Acquire Method</Form.Label>
    				<Form.Control type="text" placeholder="Acquire Method" />

				  <FloatingLabel label="Username" className="mb-3">
				    <Form.Control 
				    	type="text" 
				    	placeholder="Acquire Method"
				    	onChange={handleOnChange}
				    	name='acquire_method'
				    	value={details.acquire_method}
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
			<h5>{(props.loginStatus !== "LOGGED_IN") ? props.loginStatus : null }</h5>
		</div>

	)
}

export default connect(null, {login})(RequestForm)