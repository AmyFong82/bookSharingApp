import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card';

import EditBookBtn from './EditBookBtn'
import RequestBookBtn from './RequestBookBtn'


class Book extends Component {

	render(props) {
		const { book } = this.props;
		const currentUserId = this.props.user.id;

		const displayBtn = () => {
			if(window.location.pathname.includes("/books/") || window.location.pathname.includes("/requests/") || window.location.pathname.includes("/edit")){
				return null
			}else if(currentUserId === book.user_id) {
				return <EditBookBtn book={book}/>
			}else if (this.props.requests.filter(requestedBook => requestedBook.id === book.id)[0]){
				return <Link to={`/requests/${book.id}`} className="btn btn-danger">Cancel Request</Link>
			}
			return <RequestBookBtn book={book} bookId={book.id}/>
		}


		return(
			<div className="col-sm-3 pt-3 pb-3">
				<Card>
				  <Card.Img src={book.cover_image} className="card-img-top" alt={book.title}/>
				  <Card.Body>
				    <Card.Title>{book.title}</Card.Title>
					<Card.Text>{book.author}</Card.Text>
				    <Card.Text><b>Reading age:</b> {book.reading_age}</Card.Text>
				    {displayBtn()}
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return{
		loginStatus: state.user.loginStatus,
		user: state.user.details,
		requests: state.user.requests
	}
}

export default connect(mapStateToProps)(Book);