import React, {Component} from 'react'
import Book from '../components/books/Book'
import EditBookBtn from "../components/books/EditBookBtn"
import { connect } from 'react-redux'


class BookContainer extends Component {
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
		const { error, isLoaded, book } = this.state
		console.log(this.state)
		if (error) {
			return <div> Error: {error.message}</div>
		} else if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<div className="container mt-5">
					<div className="row justify-content-center">
						<Book book={book}/>
					</div>
					<div className="row justify-content-center">
						<div className="col-sm-3 pt-3">
							<EditBookBtn book={book} requester={this.props.user} loginStates={this.props.loginStatus}/>
						</div>
					</div>
				</div>
			)
		}

	}
}

const mapStateToProps = state => {
	return {
		user: state.user.details,
		loginStates: state.user.loginStatus
	}
}

export default connect(mapStateToProps)(BookContainer)