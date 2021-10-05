import React, { Component } from 'react';
import { connect } from 'react-redux'
import Account from '../components/users/Account'

class AccountContainer extends Component {

	render() {
		return(
			<div className="account-container mt-5">
				<Account user={this.props.user} books={this.props.books} requests={this.props.requests}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.details,
		books: state.user.books,
		requests: state.user.requests
	}
}

export default connect(mapStateToProps)(AccountContainer)