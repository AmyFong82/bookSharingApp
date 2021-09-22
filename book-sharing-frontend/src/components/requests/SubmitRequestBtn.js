import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { loggedIn } from '../users/loggedIn'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


function SubmitRequestBtn(props) {
	// where is the closing bracket?

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
				if(respJson.message) {
					setShow(true)						
					const alertHeading = document.querySelector(".alert-heading")
					alertHeading.innerHTML = respJson.message
				}
			})
		}else{
		    history.push("/login");
		}
	}

	const [show, setShow] = useState(false);

	if (show) {
	    return (
	      <Alert variant="success" onClose={() => setShow(false)} >
	        <Alert.Heading></Alert.Heading>
	      </Alert>
	    );
	  }
	   return <Button id="request_btn" onClick={handleSubmit}>Submit Request</Button>;
	}

	const mapStateToProps = state => {
		return {
			loginStatus: state.user.loginStatus
		}
	}


export default connect(mapStateToProps)(SubmitRequestBtn)