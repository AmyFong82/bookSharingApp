import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import EditBookBtn from './EditBookBtn'
import RequestBookBtn from './RequestBookBtn'
import { loggedIn } from '../users/loggedIn'

class Book extends Component {

	checkLogin() {
		return loggedIn(this.props.loginStatus)
	}

	currentUser() {
		return this.props.user
	}

	render(props) {
		const { book } = this.props;

		return(
			<div className="col-sm-3">
				<Card>
				  <Card.Img src={book.cover_image} className="card-img-top" alt={book.title}/>
				  <Card.Body>
				    <Card.Title>{book.title}</Card.Title>
					<Card.Text>{book.author}</Card.Text>
				    <Card.Text>{book.format}</Card.Text>
				    <Card.Text><b>Reading age:</b> {book.reading_age}</Card.Text>
				    {/*{console.log(this.props)}*/}
				    {/*{console.log(loggedIn(this.props.loginStatus))}*/}
				    {this.checkLogin() ? ((book.user_id === this.props.user.user.id) ? <EditBookBtn /> : <RequestBookBtn loggedIn={this.checkLogin()}/>) : <RequestBookBtn props={this.props}/>}
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		loginStatus: state.user.loginStatus,
		user: state.user.currentUser,
	}
}

export default connect(mapStateToProps)(Book);