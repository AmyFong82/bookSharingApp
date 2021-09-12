import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/userActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function RequestForm(props) {

	const [details, setDetails] = useState({userid: "", bookid: "", date_requested: ""})

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
			<Form onSubmit={handleSubmit}>

			  <Button variant="primary" type="submit">
			    Request
			  </Button>
			</Form>
			<h5>{(props.loginStatus !== "LOGGED_IN") ? props.loginStatus : null }</h5>
		</div>

	)
}

export default connect(null, {login})(RequestForm)