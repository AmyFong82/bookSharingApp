import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { login } from '../actions/userActions'
import LoginForm from '../components/users/LoginForm'
import AccountContainer from './AccountContainer'



class LoginContainer extends Component {

	render(){
		return(
			<div className="login-container mt-5">
				<LoginForm login={login} componentDidUpdate={this.componentDidUpdate}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		...state,
		loggedInStatus: state.user.LoggedInStatus
	}
}

export default connect(mapStateToProps)(LoginContainer)