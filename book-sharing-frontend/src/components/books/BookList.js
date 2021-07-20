import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
	listBooks = () => {
		console.log(this.props.books)
		return this.props.books
		// return this.props.books.map(book => <Book key={book.id}/>)
	}

	render(){
		return (
			<div>{this.listBooks()}</div>
		)
	}
}

export default BookList