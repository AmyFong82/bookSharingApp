import React, { Component } from 'react';
import { connect } from 'react-redux'
import NavComp from '../components/NavComp'

class NavContainer extends Component {

	render() {
		return(
			<NavComp user={this.state}/>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.current_user,
		books: state.books.booklist
	}
}

export default connect(mapStateToProps)(NavContainer)