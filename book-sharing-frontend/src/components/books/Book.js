import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Book extends Component {

	render() {
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
				    <a href="#" className="btn btn-primary">Request</a>
				  </Card.Body>
				</Card>
			</div>
		)
	}
}

export default Book;