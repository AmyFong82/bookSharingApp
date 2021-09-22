import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/bookActions'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function NewBookForm(props) {
	console.log(props)

	const [book, setDetails] = useState({user_id: "", title: "", author: "", cover_image: "", reading_age: ""})

	const handleOnChange = event => {
	    setDetails({
	    	...book,
	      [event.target.name]: event.target.value
	    });
	}

	const handleSubmit = event => {
		event.preventDefault()
		console.log({book})
		props.addBook({book})
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


			  <Form.Group controlId="cover_image" className="mb-3">
			    <Form.Label>Upload Cover Image</Form.Label>
			    <Form.Control type="file" />
			  </Form.Group>

			  <fieldset>
			    <Form.Group as={Row} className="mb-3 mt-3">
			      <Form.Label as="legend" >
			        Reading Age:
			      </Form.Label>
			      <Col m={4} className="mt-3">
			        <Form.Check
			          inline
			          type="radio"
			          label="Toddlers"
			          name="reading_age"
			          id="toddlers"
			        />
			        <Form.Check
			          inline
			          type="radio"
			          label="Kids"
			          name="reading_age"
			          id="kids"
			        />
			        <Form.Check
			          inline
			          type="radio"
			          label="Teens"
			          name="reading_age"
			          id="teens"
			        />
			        <Form.Check
			          inline
			          type="radio"
			          label="Adults"
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

export default connect(null, {addBook})(NewBookForm)