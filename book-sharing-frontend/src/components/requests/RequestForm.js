import React, { useState } from 'react'
import { connect } from 'react-redux'
import { request } from '../../actions/bookActions'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function RequestForm(props) {
	console.log(props)



	const handleSubmit = event => {
		event.preventDefault()
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
						console.log(respJson)

			})

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



export default RequestForm