import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export default class Login extends React.Component{
	render(){
		return(
			<Form>
			  <FloatingLabel label="Username" className="mb-3">
			    <Form.Control type="text" placeholder="Username" />
			  </FloatingLabel>
			  <FloatingLabel label="Password">
			    <Form.Control type="password" placeholder="Password" />
			  </FloatingLabel>

			  <Button variant="primary" type="submit">
			    Login
			  </Button>
			</Form>
		)
	}
}