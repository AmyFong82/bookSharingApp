import React, {Component} from 'react'
import Book from '../components/books/Book'
import EditBookBtn from "../components/books/EditBookBtn"
import RequestBookBtn from "../components/books/RequestBookBtn"
import { connect } from 'react-redux'

import { showBook } from '../actions/bookActions'
import { Link } from 'react-router-dom'



class BookContainer extends Component {

	componentDidMount(){
		if(this.props.match.params.id){
			const id = this.props.match.params.id
			this.props.showBook(id)
		}
	}


	render(props){

		const thisbook = this.props.book

		const displayBtn = () => {
			if(thisbook.user_id === this.props.user.id){
				return(
					<EditBookBtn book={thisbook} loginStates={this.props.loginStatus}/>
				)
			}else if(this.props.requests && this.props.requests.find(book => book.id === thisbook.id)){
				return(
					<Link to={`/requests/${thisbook.id}`} className="btn btn-danger">Cancel Request</Link>
				)
			}else{
				return(
					<RequestBookBtn book={thisbook} bookId={thisbook.id}/>
				)
			}
		}


		if(this.props.message.length < 0){
			return (
				<div className="container mt-5">
					<div className="row justify-content-center">
						<div><b>Book {this.props.message}</b></div>
					</div>
				</div>
			)
		}else{
			return (
				<div className="container mt-5">
					<div className="row justify-content-center">
						<Book book={this.props.book}/>
					</div>
						<div className="row justify-content-center">
							<div className="col-sm-3 pt-3">
								{displayBtn()}
							</div>
						</div>
				</div>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.details,
		loginStates: state.user.loginStatus,
		book: state.books.currentBook,
		message: state.books.message,
		requests: state.user.requests
	}
}

const mapDispatchToProps = dispatch => {
	return {
		showBook: id => dispatch(showBook(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)