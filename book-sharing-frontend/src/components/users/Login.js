import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/userActions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


class Login extends React.Component{
	state = {
		user: {
			username: ""
			password: ""
		}
	}

	handleSubmit = event => {
		event.preventDafault()
    	this.props.dispatch({type: 'AUTHENTICATE', payload: this.state})
  	}

	render(){
		const user = this.props.user

		return(
			<Form onSubmit={ event => this.handleSubmit(event) }>
			  <Form.Group className="mb-3" controlId="formBasicUsername">
				  <FloatingLabel label="Username" className="mb-3">
				    <Form.Control type="text" placeholder="Username" required />
				  </FloatingLabel>
			  </Form.Group>
  			  <Form.Group className="mb-3" controlId="formBasicPassword">
				  <FloatingLabel label="Password">
				    <Form.Control type="password" placeholder="Password" required />
				  </FloatingLabel>
			  </Form.Group>

			  <Button variant="primary" type="submit">
			    Login
			  </Button>
			</Form>
			{user}
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 		username: state.username,
// 		password: state.password
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchUser: () => dispatch(fetchUser())
// 	}
// }

export default connect()(Login)
// export default connect(mapStateToProps, mapDispatchToProps)(Login)