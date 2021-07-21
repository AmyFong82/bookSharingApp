import React, { Component } from 'react';

class Book extends Component {

	render() {
		console.log(this.props)
		const { book } = this.props;

		return(
			<div className="card" style={{width: 18 + 'rem'}}>
			  <img src={book.cover_image} className="card-img-top" alt={book.title}/>
			  <div className="card-body">
			    <h5 className="card-title">{book.title}</h5>
				<p className="card-text">by {book.author}</p>
			    <p className="card-text">{book.format}</p>
			    <p className="card-text">{book.reading_age}</p>
			    <a href="#" className="btn btn-primary">Go somewhere</a>
			  </div>
			</div>
		)
	}
}

export default Book;