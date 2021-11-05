import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginForm from '../components/users/LoginForm'
import SignupForm from '../components/users/SignupForm'
import {alert} from './alert'


class LoginContainer extends Component {

	componentDidUpdate(){
		if(this.props.props.loginStatus === "LOGGED_IN"){
				this.props.history.go(-1)
		}
	}

	render(){
		return(
			<div className="container mt-5">
				<div className="row">
					{this.props.location.state ? alert(this.props) : null}
					<LoginForm loginStatus={this.props.props.loginStatus} />
					<SignupForm loginStatus={this.props.props.loginStatus} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		loginStatus: state.user.LoginStatus
	}
}

export default connect(mapStateToProps)(LoginContainer)