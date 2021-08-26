import React from 'react'
import Book from '../books/Book'
import RequestForm from "./RequestForm"

function Request(props) {

	const book = () => {
		return props.props.books.booklist.find(book => book.id == props.match.params.id)
	}

	return (
			<div className="container mt-5">
				<div className="row">
					<Book book={book()}/>
					<RequestForm />
				</div>
			</div>

		)
	

}

export default Request