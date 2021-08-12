import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import LoggedIn from '../users/LoggedIn';
import CurrentUser from '../users/CurrentUser'

class Book extends Component {

	render() {
		const { book } = this.props;
		const { user } = this.props.user

		return(
			<div className="col-sm-3">
				<Card>
				  <Card.Img src={book.cover_image} className="card-img-top" alt={book.title}/>
				  <Card.Body>
				    <Card.Title>{book.title}</Card.Title>
					<Card.Text>{book.author}</Card.Text>
				    <Card.Text>{book.format}</Card.Text>
				    <Card.Text><b>Reading age:</b> {book.reading_age}</Card.Text>
				    {console.log({book})}
				    {console.log(this.props.user)}
				    <a href="#" className="btn btn-primary">{book.user_id === this.props.user.id ? "Remove" : "Request"}</a>
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

// const mapStateToProps = state => {
// 	loggedInUser: state.
// }

export default Book;