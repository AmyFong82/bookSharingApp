import React, { Component } from 'react';
import { connect } from 'react-redux'
import Account from '../components/users/Account'

class AccountContainer extends Component {

	componentDidUpdate(){
		if(this.props.user.loginStatus === "LOGGED_IN"){
				this.props.history.push("/account")
			}
	}	


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