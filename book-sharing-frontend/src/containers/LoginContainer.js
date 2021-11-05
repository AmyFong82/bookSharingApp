import React, { Component } from 'react';
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

import LoginForm from '../components/users/LoginForm'
import SignupForm from '../components/users/SignupForm'


class LoginContainer extends Component {

	componentDidUpdate(){
		if(this.props.props.loginStatus === "LOGGED_IN"){
				this.props.history.go(-1)
		}
	}

	alert = () => {
		return <Alert variant="primary">{this.props.location.state.message}</Alert>
	}

	render(){
		console.log(this.props)
		return(
			<div className="container mt-5">
				<div className="row">
					{this.props.location.state ? this.alert() : null}
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