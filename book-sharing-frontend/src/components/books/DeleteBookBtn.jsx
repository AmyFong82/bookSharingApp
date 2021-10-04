import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { loggedIn } from '../users/loggedIn'
import { request } from '../../actions/userActions'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


function DeleteBookBtn(props) {
	// where is the closing bracket?

	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault()
		// if(loggedIn(props.loginStatus)){
			const details = {requester_id: props.requester.id,
							book_id: props.book.id}
			props.request(details)
			setShow(true)						
		// }else{
		//     history.push("/login");
		// }
	}

	const [show, setShow] = useState(false);

	if (show) {
		
	    return (
	      <Alert variant="success" onClose={() => setShow(false)} >
	        <Alert.Heading>Book Deleted</Alert.Heading>
	      </Alert>
	    );
	  }
	   return (
	   		<Button id="request_btn" variant="danger" onClick={handleSubmit}>Delete Book</Button>
	   	)
	}

	const mapStateToProps = state => {
		return {
			loginStatus: state.user.loginStatus
		}
	}


export default connect(mapStateToProps, {request})(DeleteBookBtn)