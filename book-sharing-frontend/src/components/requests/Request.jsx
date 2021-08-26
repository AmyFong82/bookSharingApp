import React from 'react'
import Book from '../books/Book'

function Request(props) {

	const book = () => {
		return props.props.books.booklist.find(book => book.id == props.match.params.id)
	}

	return (
			<div className="books-container mt-5">
				<Book book={book()}/>
			</div>

		)
	

}

export default Request