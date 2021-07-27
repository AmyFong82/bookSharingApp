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

// const mapStateToProps = state => {
// 	return {
// 		user: state.user.current_user,
// 		authenticating: state.user.authenticating
// 	}
// }

// const mapDispatchToProps = dispatch => {
// 	return {
// 		login_user: () => dispatch(loginUser())
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)