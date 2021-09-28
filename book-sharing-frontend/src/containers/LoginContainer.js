import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginForm from '../components/users/LoginForm'
import SignupForm from '../components/users/SignupForm'


class LoginContainer extends Component {

	componentDidUpdate(){
		if(this.props.props.loginStatus === "LOGGED_IN"){
				this.props.history.go(-1)
		}
	}

	loginStatus(){
		return this.props.props.loginStatus
	}

	render(){
		return(
			<div className="container mt-5">
				<div className="row">
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