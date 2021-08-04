import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Login } from '../actions/userActions'
import LoginForm from '../components/users/LoginForm'


class LoginContainer extends Component {

	render() {

		const loggedIn = (this.props.user.length === 1)

		return(
			<div className="login-container mt-5">
				<Router>
		        	<Switch>
						<Route exact path="/login">
						  {loggedIn ? <Redirect to="/account" /> : <LoginForm Login={Login} />}
						</Route>
					</Switch>
				</Router>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		user: state.user
	}
}

export default connect(mapStateToProps)(LoginContainer)