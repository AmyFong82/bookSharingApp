import React, { Component } from 'react';
import { connect } from 'react-redux'
import Account from '../components/users/Account'

class AccountContainer extends Component {
	render() {
		return(
			<div className="account-container mt-5">
				<Account user={this.props.user}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.currentUser.user
	}
}

export default connect(mapStateToProps)(AccountContainer)