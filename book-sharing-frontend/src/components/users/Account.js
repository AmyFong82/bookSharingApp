import React, {Component} from 'react'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Account extends Component {

	render(props){
		return(
			<Form>
			  <Form.Group className="mb-3" controlId="formBasicEmail">
			    <Form.Label>Email address</Form.Label>
			    <Form.Control type="email" placeholder="user.email" />
			  </Form.Group>

			  <Button variant="primary" type="submit">
			    Edit
			  </Button>
			</Form>
		)
	}
}

const mapStateToProps = state => {
	return{
		user: state.user,
		books: state.books.booklist
	}
}

export default connect(mapStateToProps)(Account)