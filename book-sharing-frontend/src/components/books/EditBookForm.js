import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../../actions/bookActions'
import { addUserNewBook } from '../../actions/userActions'

import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


function EditBookForm(props) {

    const book = props.book
    console.log(props)

	return(
		<div className="col m-5">
			<h5 className="bg-primary">Edit Book Info</h5>

			<Form onSubmit={props.handleSubmit}>

			  <Form.Group className="mb-3" controlId="title">
				  <FloatingLabel label="Title" className="mb-3">
				    <Form.Control 
				    	type="text" 
				    	placeholder="Title"
				    	onChange={event => props.handleOnChange(event)}
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
				    	onChange={event => props.handleOnChange(event)}
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
				    	onChange={event => props.handleOnChange(event)}
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
			    	  onChange={event => props.handleOnChange(event)}
			          type="radio"
			          label="Toddlers"
			          value="Toddlers"
			          name='reading_age'
			          defaultChecked={book.reading_age === "Toddlers"}
			          id="toddlers"
			        />
			        <Form.Check
			          inline
  			    	  onChange={event => props.handleOnChange(event)}
			          type="radio"
			          label="Kids"
			          value="Kids"
			          name='reading_age'
			          defaultChecked={book.reading_age === "Kids"}
			          id="kids"
			        />
			        <Form.Check
			          inline
			    	  onChange={event => props.handleOnChange(event)}
			          type="radio"
			          label="Teens"
			          value="Teens"
			          name='reading_age'
			          defaultChecked={book.reading_age === "Teens"}
			          id="teens"
			        />
			        <Form.Check
			          inline
			    	  onChange={event => props.handleOnChange(event)}
			          type="radio"
			          label="Adults"
			          value="Adults"
			          name='reading_age'
			          defaultChecked={book.reading_age === "Adults"}
			          id="adults"
			        />
			      </Col>
			    </Form.Group>
			  </fieldset>

			  <Button variant="primary" type="submit">
			    Save
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

export default connect(mapStateToProps, mapDispatchToProps)(EditBookForm)