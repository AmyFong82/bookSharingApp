import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { loggedIn } from '../users/loggedIn'
import { cancelRequest } from '../../actions/userActions'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


function SubmitCancelRequestBtn(props) {
	// where is the closing bracket?

	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault()
		const book_id = props.book.id
		props.cancelRequest(book_id)
		setShow(true)						
	}

	const [show, setShow] = useState(false);

	if (show) {
		
	    return (
	      <Alert variant="success" onClose={() => setShow(false)} >
	        <Alert.Heading>Request Canceled</Alert.Heading>
	      </Alert>
	    );
	  }
	   return <Button className="btn btn-danger" onClick={handleSubmit}>Confirm Cancel Request</Button>;
	}

	const mapStateToProps = state => {
		return {
			loginStatus: state.user.loginStatus
		}
	}


export default connect(mapStateToProps, {cancelRequest})(SubmitCancelRequestBtn)