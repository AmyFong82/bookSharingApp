import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { request } from '../../actions/bookActions'
import { loggedIn } from '../users/loggedIn'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function RequestForm(props) {

	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault()
		if(loggedIn(props.loginStatus)){
			const details = {requester_id: props.requester.id,
							book_id: props.book.id}
			fetch('http://localhost:3001/api/v1/requests', {
				method: 'POST',
				headers: {
				"Content-Type": "application/json",
	    		"Accept": "application/json"
				},
				body: JSON.stringify(details)
			}).then(resp => resp.json())
				.then(respJson => {
					const success_request = document.getElementById("success-request")
					console.log(respJson)
					success_request.innerHTML = respJson.message
				})
			}else{
			    history.push("/login");
			}


	}

	return(
		<div className="col m-5">
			<Form onSubmit={handleSubmit}>

			  <Button variant="primary" type="submit">
			    Request
			  </Button>
			</Form>
			<alert id="success-request"></alert>
		</div>

	)
}

const mapStateToProps = state => {
	return {
		loginStatus: state.user.loginStatus
	}
}

export default connect(mapStateToProps)(RequestForm)