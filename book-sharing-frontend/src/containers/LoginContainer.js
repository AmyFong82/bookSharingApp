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
import AccountContainer from './AccountContainer'



class LoginContainer extends Component {

	checkLoginStatus(props){
		
	}

	render() {
		console.log(this.props.user)
		if(this.props.user){
			router.push('/account')

		}else{
			return(
				<div className="login-container mt-5">
					<LoginForm Login={Login} />
				</div>
			)

		}


	}
}

const mapStateToProps = state => {
	return{
		user: state.user.currentUser
	}
}

export default connect(mapStateToProps)(LoginContainer)