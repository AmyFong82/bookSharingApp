import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/userActions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


class Login extends React.Component{

	state = {
		username: '',
		password: ''
	}


	handleOnChange = event => {
	    this.setState({
	      [event.target.name]: event.target.value
	    });
	}

	handleSubmit = event => {
		event.preventDefault()
		const user = {...this.state}
    	this.props.loginUser(user)
	    this.setState({
	      username: '',
	      password: ''
	    });
  	}

	render(){
		return(
			<Form onSubmit={ event => this.handleSubmit(event) }>
			  <Form.Group className="mb-3" controlId="formBasicUsername">
				  <FloatingLabel label="Username" className="mb-3">
				    <Form.Control 
				    	type="text" 
				    	placeholder="Username"
				    	onChange={(event) => this.handleOnChange(event)}
				    	name='username'
				    	value={this.state.username}
				    	required />
				  </FloatingLabel>
			  </Form.Group>

  			  <Form.Group className="mb-3" controlId="formBasicPassword">
				  <FloatingLabel label="Password">
				    <Form.Control 
				    	type="password" 
				    	placeholder="Password"
				    	onChange={(event) => this.handleOnChange(event)}
				    	name='password'
				    	value={this.state.password}
				    	required />
				  </FloatingLabel>
			  </Form.Group>

			  <Button variant="primary" type="submit">
			    Login
			  </Button>
			</Form>
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 		username: state.username,
// 		password: state.password
// 	}
// }


export default connect(null, { loginUser })(Login)
// export default connect(mapStateToProps, mapDispatchToProps)(Login)