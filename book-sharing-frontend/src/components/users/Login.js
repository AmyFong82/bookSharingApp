import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../../actions/userActions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'


class Login extends React.Component{

	state = {
		username: "",
		password: ""
	}

	handleOnChange = event => {
	    this.setState({
	      [event.target.name]: event.target.value
	    });
	}

	handleSubmit = event => {
		event.preventDafault()
		const user = {...this.state}
    	this.props.fetchUser(user)
	    this.setState({
	      title: '',
	      authorName: ''
	    });
  	}

	render(){
		return(
			<Form onSubmit={ event => this.handleSubmit(event) }>
			  <Form.Group className="mb-3" controlId="formBasicUsername">
				  <FloatingLabel label="Username" className="mb-3">
				  	{/*//username input}*/}
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
				  {/*// password input*/}
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

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchUser: () => dispatch(fetchUser())
// 	}
// }

export default connect(null, { fetchUser })(Login)
// export default connect(mapStateToProps, mapDispatchToProps)(Login)