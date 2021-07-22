import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'


export default class Account extends Component {

	render(){
		return(
			<Form>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" placeholder="user.email" />
			  </Form.Group>
			</Form>
		)
	}
}