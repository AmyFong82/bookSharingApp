import React, {Component} from 'react'
import Book from '../components/books/Book'
import EditBookForm from "../components/books/EditBookForm"
import { connect } from 'react-redux'
import {editBook} from '../actions/bookActions'



class EditBookContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			book: []
		}
	}

	componentDidMount(){
		const id = this.props.match.params.id
		fetch(`http://localhost:3001/api/v1/books/` + id)
		.then(resp => resp.json())
		.then(
			respJson => {
				this.setState({
					isLoaded: true,
					book: respJson
				});
			}
        )
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
		// this.props.updateBook(this.state.book)
		// const BookId = props.book
		this.props.history.push(`/books/${this.state.book.id}`)
	}

	render(){
		const { book } = this.state
		return (
			<div className="container mt-5">
				<div className="row justify-content-center">
					<Book book={book}/>
					<EditBookForm book={book} handleOnChange={this.handleOnChange} handleSubmit={this.handleSubmit} loginStates={this.props.loginStatus}/>
				</div>
			</div>
		)
	}
}


export default connect(null, {editBook})(EditBookContainer)
