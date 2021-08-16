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
				{console.log("in container: ", this.props.children)}
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