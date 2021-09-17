import React, {Component} from 'react'
import { fetchBook } from '../../actions/bookActions'
import Book from '../books/Book'
import RequestForm from "./RequestForm"
import { connect } from 'react-redux';


class Request extends Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			book: []
		}
	}

	componentDidMount(){
		const id = this.props.match.params.id
		fetch(`http://localhost:3001/api/v1/books/` + id)
		.then(resp => resp.json())
		.then(
			respJson => {
				console.log(respJson)
				this.setState({
					isLoaded: true,
					book: respJson
				});
			},
	        (error) => {
	          this.setState({
	            isLoaded: true,
	            error
	          });
	        }
        )
	}

	

	render(){

		console.log(this.props)
		const { error, isLoaded, book } = this.state
		if (error) {
			return <div> Error: {error.message}</div>
		} else if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div className="container mt-5">
					<div className="row">
						<Book book={book}/>
						<RequestForm />
					</div>
				</div>
			)
		}

	}

}

// const book = () => {
// 	console.log(this.props)
	// return props.props.books.booklist.find(book => book.id == props.match.params.id)
// }

// const mapStateToProps = state => {
// 	return {
// 		user: state.user.currentUser,
// 		books: state.books.booklist
// 	}
// }

export default Request