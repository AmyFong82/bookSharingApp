import React, {Component} from 'react'
import BookList from '../books/BookList'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Account extends Component {

	render(props){
		return(
			<>
			<Form>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <h2>{this.props.user.email}</h2>
			    <Form.Control type="email" placeholder={this.props.user.email} />
			  </Form.Group>

			  <Button variant="primary" type="submit">
			    Edit
			  </Button>
			</Form>
			{(this.props.books === undefined) ? null : <BookList user={this.props.user} books={this.props.books}/> }
			</>
		)
	}
}