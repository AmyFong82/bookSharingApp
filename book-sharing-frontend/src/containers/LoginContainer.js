import React, { Component } from 'react';
import Login from '../components/users/Login'

export default class LoginContainer extends Component {
	render() {
		return(
			<div className="login-container mt-5">
				<Login/>
			</div>
		)
	}
}