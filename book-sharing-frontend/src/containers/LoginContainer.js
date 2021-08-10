import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";


import { login } from '../actions/userActions'
import LoginForm from '../components/users/LoginForm'
import AccountContainer from './AccountContainer'



class LoginContainer extends Component {

	componentDidUpdate(){
		if(this.props.user.loggedInStatus === "LOGGED_IN"){
				this.props.history.push("/account")
			}
	}
	

	render(){
		return(
			<div className="login-container mt-5">
				<LoginForm login={login} />
				<h2>Logged In Status: {this.props.user.loggedInStatus}</h2>
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