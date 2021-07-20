import React, { Component } from 'react';

class Book extends Component {

	render() {
		const { book } = this.props;

		return(
			<div>
				<img src={book.cover_image} alt={book.title}/>
				<li>
					{book.title} by {book.author}
				</li>
			</div>

		)
	}
}

export default Book;