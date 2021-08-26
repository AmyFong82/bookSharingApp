import React, { Component } from 'react';
import BookList from '../components/books/BookList'
import { fetchBooks } from '../actions/bookActions'
import { connect } from 'react-redux';

class BooksContainer extends Component {

	componentDidMount(){
		this.props.fetchBooks()
	}

	render() {
		return (
			<BookList books={this.props.books} user={this.props.user} routerProps={this.props}/>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.currentUser,
		books: state.books.booklist
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchBooks: () => dispatch(fetchBooks())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)