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

	displayBtn(){
		const book = this.props.book
				console.log(book)
		const book_id = this.props.book.id
				console.log(book_id)
		const requests = this.props.requests
			console.log(requests)
		const requestedBook = (requests.filter(book => book.id === book_id))
		console.log(requestedBook)
		if(window.location.href.includes("http://localhost:3000/books/")){
			return null
		}else if (this.checkLogin()){
			if(book.user_id === this.props.user.id){
				return <EditBookBtn bookId={book.id}/>
			}else if(this.props.requests.includes(book)){
				return "Cancel Request"
			}else if(requestedBook === book){
				return "Cancel Request"
			}else{
				return <RequestBookBtn bookId={book.id} book={book} loggedIn={this.checkLogin()}/>
			}
		}else {
			return <RequestBookBtn props={this.props}/>
		}
	}


	render(props) {
		const { book } = this.props;

		return(
			<div className="col-sm-3 pt-3 pb-3">
				<Card>
				  <Card.Img src={book.cover_image} className="card-img-top" alt={book.title}/>
				  <Card.Body>
				    <Card.Title>{book.title}</Card.Title>
					<Card.Text>{book.author}</Card.Text>
				    <Card.Text><b>Reading age:</b> {book.reading_age}</Card.Text>
				    {this.displayBtn()}
				    {/*{console.log(this.props)}*/}
				    {/*{console.log(loggedIn(this.props.loginStatus))}*/}
				    {/*{window.location.href.includes("http://localhost:3000/books/") ? null :
				    	this.checkLogin() ? 
				    	((book.user_id === this.props.user.id) ? <EditBookBtn bookId={book.id}/> : <RequestBookBtn bookId={book.id} book={book} loggedIn={this.checkLogin()}/>) 
				    	: <RequestBookBtn props={this.props}/>}*/}
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