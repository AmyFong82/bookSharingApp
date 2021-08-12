import Book from './Book'

function BookList(props){

	const listBooks = () => {
		return props.books.map(book => <Book key={book.id} book={book} user={props.user}/>)
	}

	return (
		<div className="row">{listBooks()}</div>
	)
}

export default BookList