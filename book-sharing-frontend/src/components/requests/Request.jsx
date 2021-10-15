import React, {Component} from 'react'
import Book from '../books/Book'
import SubmitRequestBtn from "./SubmitRequestBtn"
import { connect } from 'react-redux'
import { showBook } from '../../actions/bookActions'


class Request extends Component {

	componentDidMount(){
		const id = this.props.match.params.id
		this.props.showBook(id)
	}
	

	render(){
		return (
			<div className="container mt-5">
				<div className="row justify-content-center">
					<Book book={this.props.book}/>
				</div>
				<div className="row justify-content-center">
					<div className="col-sm-3 pt-3">
						<SubmitRequestBtn book={this.props.book} requester={this.props.user} loginStates={this.props.loginStatus}/>
					</div>
				</div>
			</div>
		)

	}
}

const mapStateToProps = state => {
	return {
		user: state.user.details,
		loginStates: state.user.loginStatus,
		book: state.books.currentBook
	}
}

export default connect(mapStateToProps, {showBook})(Request)