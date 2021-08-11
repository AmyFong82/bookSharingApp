import React, { Component } from 'react';
import { connect } from 'react-redux'
import Account from '../components/users/Account'
import LoggedIn from '../components/users/LoggedIn'

class AccountContainer extends Component {
	render() {
		return(
			<div className="account-container mt-5">
				<Account user={this.props.user} books={this.props.books}/>
				<LoggedIn currentUser={this.props.user}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.currentUser.user,
		books: state.user.currentUser.books
	}
}

export default connect(mapStateToProps)(AccountContainer)