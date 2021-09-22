import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/bookActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function NewBookForm(props) {
	console.log(props)

	const [details, setDetails] = useState({user_id: "", title: "", author: "", cover_image: "", reading_age: ""})

	const handleOnChange = event => {
	    setDetails({
	    	...details,
	      [event.target.name]: event.target.value
	    });
	}

	const handleSubmit = event => {
		event.preventDefault()
		props.login({book: details})
	}

	return(
		<div className="col m-5">
			<h5>Existing User</h5>
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
		</div>

	)
}

export default connect(null, {addBook})(NewBookForm)