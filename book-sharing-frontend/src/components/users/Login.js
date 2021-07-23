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
  	}

	render(){
		const user = this.props.user

		return(
			<Form onSubmit={ event => this.handleSubmit(event) }>
			  <Form.Group className="mb-3" controlId="formBasicUsername">
				  <FloatingLabel label="Username" className="mb-3">
				    <Form.Control type="text" placeholder="Username" required onChange={(event) => this.handleOnChange(event)}/>
				  </FloatingLabel>
			  </Form.Group>
  			  <Form.Group className="mb-3" controlId="formBasicPassword">
				  <FloatingLabel label="Password">
				    <Form.Control type="password" placeholder="Password" required onChange={(event) => this.handleOnChange(event)}/>
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

export default connect()(Login)
// export default connect(mapStateToProps, mapDispatchToProps)(Login)