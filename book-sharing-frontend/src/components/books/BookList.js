import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {

	listBooks = () => {
		return this.props.books.map(book => <Book key={book.id} book={book} />)
	}

	render(){
		return (
			<div className="row">{this.listBooks()}</div>
		)
	}
}

export default BookList