import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoginForm from '../components/users/LoginForm'
import SignupForm from '../components/users/SignupForm'



class LoginContainer extends Component {
	constructor(props){
		super(props)
	}

	componentDidUpdate(){
		if(this.props.user.loginStatus === "LOGGED_IN"){
				this.props.history.go(-1)
			}
	}
	

	render(){
		return(
			<div className="container mt-5">
				<div className="row">
					<LoginForm loginStatus={this.props.user.loginStatus}/>
					<SignupForm />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		...state,
		loginStatus: state.user.LoginStatus
	}
}

export default connect(mapStateToProps)(LoginContainer)