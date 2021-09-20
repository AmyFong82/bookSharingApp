import React, {Component} from 'react'
import BookList from '../books/BookList'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default class Account extends Component {

	render(props){
		return(
			<div>
				<h5>Your email: {this.props.user.email}</h5>
				<h3>Your Books For Sharing</h3>
				{(this.props.books === undefined) ? null : <BookList user={this.props.user} books={this.props.books}/> }
			</div>
		)
	}
}