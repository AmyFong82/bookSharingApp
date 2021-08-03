import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Login } from '../actions/userActions'
import LoginForm from '../components/users/LoginForm'
import { connect } from 'react-redux'


class LoginContainer extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return(
			<div className="login-container mt-5">
				<LoginForm Login={Login} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.current_user,
		authenticating: state.user.authenticating
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		login_user: () => dispatch(loginUser())
// 	}
// }

export default connect(mapStateToProps)(LoginContainer)