import React, {Component} from 'react'
import { connect } from 'react-redux'

import ShareBookBtn from '../books/ShareBookBtn'
import BookList from '../books/BookList'

class Account extends Component {

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

	displayUserRequests(){
		if(this.props.requests.length > 0){
			return (
				<div>
					<h5 className="bg-primary text-start">Your Requested Books</h5>
					<BookList user={this.props.user} books={this.props.requests}/>
				</div>
			)
		}
	}

	render(props){
		return(
			<div>
				<h4>Welcome {this.props.user.username}!</h4>
				<h4>Your email: {this.props.user.email}</h4>
				<br />
				<ShareBookBtn/>
				{this.displayUserBooks()}
				{this.displayUserRequests()}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		allBooks: state.books
	}
}

export default connect(mapStateToProps)(Account)