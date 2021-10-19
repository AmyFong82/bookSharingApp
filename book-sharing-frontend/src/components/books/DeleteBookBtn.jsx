import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import { deleteBook } from '../../actions/bookActions'

import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'


function DeleteBookBtn(props) {
	// where is the closing bracket?
	const book = props.book


	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault()
		props.deleteBook(book)
		setShow(true)	
		setTimeout(() => {history.push('/account')}, 2000);					
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


export default connect(mapStateToProps, {deleteBook})(DeleteBookBtn)