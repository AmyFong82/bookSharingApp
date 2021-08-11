import React, {Component} from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Account extends Component {
	constructor(props){
		super(props)
	}


	render(props){
		return(
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
		)
	}
}

 // connect(mapStateToProps)(Account)