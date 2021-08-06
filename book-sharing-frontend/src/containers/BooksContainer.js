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
			<div className="books-container mt-5">
				<BookList books={this.props.books}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		books: state.books.booklist
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchBooks: () => dispatch(fetchBooks())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)