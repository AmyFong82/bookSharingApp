import React, {Component} from 'react'

import ShareBookBtn from '../books/ShareBookBtn'
import BookList from '../books/BookList'

export default class Account extends Component {

	displayUserBooks(){
		if(this.props.books.length > 0){
			return (
				<div>
					<h5 className="bg-primary text-start">Your Books For Sharing</h5>
					<BookList user={this.props.user} books={this.props.books}/>
				</div>
			)
		}
	}

	render(props){

		const books = this.props.books

		return(
			<div>
				<h4>Welcome {this.props.user.username}!</h4>
				<h4>Your email: {this.props.user.email}</h4>
				<br />
				<ShareBookBtn/>
				{this.displayUserBooks()}
				<div>
					<h5 className="bg-primary text-start">Your Requested Books</h5>
					{(this.props.requests === undefined) ? null : <BookList user={this.props.user} books={this.props.requests}/> }
				</div>
			</div>
		)
	}
}

const mapStateToProps = state =>{
	return {
		user: state.user.details,
		books: state.user.books
	}
}




		// const displayUserBooks = props => {
		// 	console.log(props)
		// 	if(books.length > 0){
		// 		return (
		// 			<div>
		// 				<h5 className="bg-primary text-start">Your Books For Sharing</h5>
		// 				<BookList user={this.props.user} books={this.props.books}/>
		// 			</div>
		// 		)
		// 	}
		// }
// const books = this.props.books => {
// 					if(this.props.books.length > 0){

// 			}
