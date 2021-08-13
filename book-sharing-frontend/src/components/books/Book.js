import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import EditBookBtn from './EditBookBtn'
import RequestBookBtn from './RequestBookBtn'
import { loggedIn } from '../users/loggedIn'

class Book extends Component {

	render(props) {
		const { book } = this.props;
		const userID = if(loggedIn())this.props.user.user.id

		return(
			<div className="col-sm-3">
				<Card>
				  <Card.Img src={book.cover_image} className="card-img-top" alt={book.title}/>
				  <Card.Body>
				    <Card.Title>{book.title}</Card.Title>
					<Card.Text>{book.author}</Card.Text>
				    <Card.Text>{book.format}</Card.Text>
				    <Card.Text><b>Reading age:</b> {book.reading_age}</Card.Text>
{/*				    {console.log(this.props.loginStatus)}
				    {console.log(book.user_id)}*/}
				    {console.log(this.userID)}
				    {/*{console.log(loggedIn(this.props.loginStatus))}*/}
				    {loggedIn(this.props.loginStatus) && book.user_id === userID ? <EditBookBtn /> : <RequestBookBtn />}
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		loginStatus: state.user.loginStatus,
		user: state.user.currentUser
	}
}

export default connect(mapStateToProps)(Book);