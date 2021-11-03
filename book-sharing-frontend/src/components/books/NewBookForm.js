import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { addBook } from '../../actions/userActions'
import { addBookToBooklist } from '../../actions/bookActions'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import cuid from 'cuid'


function NewBookForm(props) {
    let history = useHistory();

	const [book, setDetails] = useState({user_id: props.user_id, title: "", author: "", cover_image: "", reading_age: "", cuid: cuid()})

	const handleOnChange = event => {
	    setDetails({
	    	...book,
	      [event.target.name]: event.target.value
	    });
	}

	const handleSubmit = event => {
		event.preventDefault()
		props.addBook(book)
		history.push(`/books/${book.cuid}`)
	}

	return(
		<div className="col m-5">
			<h5 className="bg-primary">Share A Book</h5>

			<Form onSubmit={handleSubmit}>

			  <Form.Group className="mb-3" controlId="title">
				  <FloatingLabel label="Title" className="mb-3">
				    <Form.Control 
				    	type="text" 
				    	placeholder="Title"
				    	onChange={handleOnChange}
				    	name='title'
				    	value={book.title}
				    	required />
				  </FloatingLabel>
			  </Form.Group>

			  <Form.Group className="mb-3" controlId="author">
				  <FloatingLabel label="Author" className="mb-3">
				    <Form.Control 
				    	type="text" 
				    	placeholder="Author"
				    	onChange={handleOnChange}
				    	name='author'
				    	value={book.author}
				    	required />
				  </FloatingLabel>
			  </Form.Group>


			  <Form.Group className="mb-3" controlId="author">
				  <FloatingLabel label="Cover Image Link" className="mb-3">
				    <Form.Control 
				    	type="text" 
				    	placeholder="Cover Image Link"
				    	onChange={handleOnChange}
				    	name='cover_image'
				    	value={book.cover_image}
				    	required />
				  </FloatingLabel>
			  </Form.Group>

			  <fieldset>
			    <Form.Group as={Row} className="mb-3 mt-3">
			      <Form.Label as="legend" >
			        Reading Age:
			      </Form.Label>
			      <Col m={4} className="mt-3">
			        <Form.Check
			          inline
			    	  onChange={handleOnChange}
			          type="radio"
			          label="Toddlers"
			          value="Toddlers"
			          name="reading_age"
			          id="toddlers"
			        />
			        <Form.Check
			          inline
  			    	  onChange={handleOnChange}
			          type="radio"
			          label="Kids"
			          value="Kids"
			          name="reading_age"
			          id="kids"
			        />
			        <Form.Check
			          inline
			    	  onChange={handleOnChange}
			          type="radio"
			          label="Teens"
			          value="Teens"
			          name="reading_age"
			          id="teens"
			        />
			        <Form.Check
			          inline
			    	  onChange={handleOnChange}
			          type="radio"
			          label="Adults"
			          value="Adults"
			          name="reading_age"
			          id="adults"
			        />
			      </Col>
			    </Form.Group>
			  </fieldset>

			  <Button variant="primary" type="submit">
			    Submit
			  </Button>
			</Form>
		</div>

	)
}

const mapStateToProps = state => {
	return {
		user_id: state.user.details.id,
		books: state.user.books,
		book: state.user.books.currentBook
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addBook: (book) => dispatch(addBook(book)),
		addBookToBooklist: (book) => dispatch(addBookToBooklist(book))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBookForm)