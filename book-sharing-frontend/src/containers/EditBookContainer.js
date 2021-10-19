import React, {Component} from 'react'
import Book from '../components/books/Book'
import EditBookForm from "../components/books/EditBookForm"
import { connect } from 'react-redux'
import {editBook} from '../actions/bookActions'
import {updateBook} from '../actions/userActions'
import { showBook } from '../actions/bookActions'


class EditBookContainer extends Component {
	constructor(props){
		super(props);
		const id = this.props.match.params.id
		this.state = {
			book: this.props.books.find(book => book.id === parseInt(id))
		}
	}

	componentDidMount(){
		const id = this.props.match.params.id
		this.props.showBook(id)
	}


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
		this.props.updateBook(this.state.book)
		this.props.history.push(`/books/${this.state.book.id}`)
	}

	render(){
		return (
			<div className="container mt-5">
				<div className="row justify-content-center">
					<Book book={this.state.book}/>
					<EditBookForm formData={this.state.book} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} loginStates={this.props.loginStatus}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.details,
		books: state.user.books
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showBook: (id) => dispatch(showBook(id)),
		editBook: (book) => dispatch(editBook(book)),
		updateBook: (book) => dispatch(updateBook(book))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(EditBookContainer)
