import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { addBook } from '../../actions/bookActions'
import { addUserNewBook } from '../../actions/userActions'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function NewBookForm(props) {
    let history = useHistory();
	console.log(props)

	const [book, setDetails] = useState({user_id: props.user_id, title: "", author: "", cover_image: "", reading_age: ""})

	const handleOnChange = event => {
	    setDetails({
	    	...book,
	      [event.target.name]: event.target.value
	    });
	}

	const handleSubmit = event => {
		event.preventDefault()
		console.log(book)
		props.addBook(book)
		props.addUserNewBook(book)
		const newBookId = props.books.length + 1
		console.log(newBookId)
		history.push(`/books/${newBookId}`)
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
		books: state.books.booklist
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addBook: (book) => {
			dispatch(addBook(book))
		},
		addUserNewBook: (book) => {
			dispatch(addUserNewBook(book))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBookForm)