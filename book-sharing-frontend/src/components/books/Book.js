import React, { Component } from 'react';

class Book extends Component {

	render() {
		console.log(this.props)
		const { book } = this.props;

		return(
			<div>
				<img src={book.cover_image} alt={book.title}/>
				<h3>{book.title}</h3>
				<li>
					{book.title} by {book.author}
				</li>
			</div>

		)
	}
}

export default Book;