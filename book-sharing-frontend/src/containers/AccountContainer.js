import React, { Component } from 'react';
import { connect } from 'react-redux'
import Account from '../components/users/Account'

class AccountContainer extends Component {
	render() {
		return(
			<div className="account-container mt-5">
				<Account user={this.props.user} books={this.props.books}/>
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