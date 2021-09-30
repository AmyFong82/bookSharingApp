import React, { Component } from 'react';

import Book from '../components/books/Book'
import { fetchBooks } from '../actions/bookActions'
import { connect } from 'react-redux';

class EditBookContainer extends Component {
	render() {
		return (
			<Book books={this.props.books} user={this.props.user} routerProps={this.props}/>
		)
	}
}