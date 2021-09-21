import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { request } from '../../actions/bookActions'
import { loggedIn } from '../users/loggedIn'
import { RequestAlert } from  '../alerts/RequestAlert'

import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function SubmitRequestBtn(props) {

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
					if(respJson.message === "Request Successful") {
						setShow(true)
					}
				})
			}else{
			    history.push("/login");
			}


	}

	const [show, setShow] = useState(false);

	  if (show) {
	    return (
	      <Alert variant="success" onClose={() => setShow(false)} dismissible>
	        <Alert.Heading>Request Submit Sucessful!</Alert.Heading>
	      </Alert>
	    );
	  }
	   return <Button onClick={handleSubmit}>Submit Request</Button>;
	}

	const mapStateToProps = state => {
		return {
			loginStatus: state.user.loginStatus
		}
	}

export default connect(mapStateToProps)(SubmitRequestBtn)