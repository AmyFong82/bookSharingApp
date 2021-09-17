import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/userActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function RequestForm(props) {
	console.log(props)

	const [details, setDetails] = useState({requester_id: "", book_id: ""})

	const handleSubmit = event => {
		event.preventDefault()
		// setDetails({
	 //    	...details,
	 //      [event.target.name]: event.target.value
	 //    });
		// props.request({request: details})
	}

	return(
		<div className="col m-5">
			<Form onSubmit={handleSubmit}>

			  <Button variant="primary" type="submit">
			    Request
			  </Button>
			</Form>
		</div>

	)
}

export default connect(null, {login})(RequestForm)