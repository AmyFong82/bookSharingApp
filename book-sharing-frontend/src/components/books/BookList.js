import Book from './Book'

function BookList(props){

	const listBooks = () => {
		return props.books.map(book => <Book key={book.id} book={book} />)
	}

	return (
		<div className="books-container mt-5">
			<div className="row">{listBooks()}</div>
		</div>
	)
}

export default BookList