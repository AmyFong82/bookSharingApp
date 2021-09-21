import React, {Component} from 'react'
import BookList from '../books/BookList'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Account extends Component {

	render(props){
		return(
			<div>
				<h4>Welcome {this.props.user.username}!</h4>
				<h4>Your email: {this.props.user.email}</h4>
				<div>
					<h5 className="bg-primary text-start">Your Books For Sharing</h5>
					{(this.props.books === undefined) ? null : <BookList user={this.props.user} books={this.props.books}/> }
				</div>
				<div>
					<h5 className="bg-primary text-start">Your Requested Books</h5>
				</div>
			</div>
		)
	}
}