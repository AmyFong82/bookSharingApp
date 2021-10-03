import React, {Component} from 'react'
import Book from '../components/books/Book'
import EditBookForm from "../components/books/EditBookForm"
import { connect } from 'react-redux'
import {editBook} from '../actions/bookActions'


class EditBookContainer extends Component {
	constructor(props){
		super(props);
		const id = this.props.match.params.id
		this.state = {
			book: this.props.props.books.booklist.find(book => book.id === parseInt(id))
		}
	}

	// book(){
	// 	const id = this.props.match.params.id
	// 	console.log(id)
	// 	this.setState({
	// 		book: this.props.props.books.booklist.find(book => book.id === id)
	// 	})
	// 	console.log(this.state)
	// }

	// componentDidMount(){
	// 	const id = this.props.match.params.id
	// 	this.setState({
	// 		book: this.props.props.books.booklist.filter(book => book.id === id)
	// 	})
	// 	console.log(this.state.book)
	// }

	handleOnChange = event => {
	    this.setState({
	    	book: {
	    		...this.state.book,
	    		[event.target.name]: event.target.value
	    	}
	    	
	    });
	}

	handleSubmit = event => {
		event.preventDefault()
		this.props.editBook(this.state.book)
		// this.props.updateBook(this.state.book)
		// const BookId = props.book
		// history.push(`/books/${newBookId}`)
	}

	render(){
		return (
			<div className="container mt-5">
				<div className="row justify-content-center">
					<Book book={this.state.book}/>
					<EditBookForm book={this.state.book} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} loginStates={this.props.loginStatus}/>
				</div>
			</div>
		)
	}
}


export default connect(null, {editBook})(EditBookContainer)