import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Account extends Component {

	render(){
		return(
			<Form>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" placeholder="user.email" />
			  </Form.Group>

			  <Button variant="primary" type="submit">
			    Edit
			  </Button>
			</Form>
		)
	}
}