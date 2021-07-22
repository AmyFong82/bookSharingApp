import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import BooksContainer from '../containers/BooksContainer'
import AccountContainer from '../containers/AccountContainer'
import LoginContainer from '../containers/LoginContainer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavComp extends Component {

	render(){
		return (
			<Router>
				<Navbar bg="light" expand="lg" fixed="top">
				  <Container>
				  <Navbar.Brand href="/"><i class="fas fa-book"></i> <b>Book Sharing</b></Navbar.Brand>
				    <Navbar.Toggle aria-controls="basic-navbar-nav" />
				    <Navbar.Collapse id="basic-navbar-nav">
				      <Nav className="me-auto">
				        <Nav.Link href="/books">Books</Nav.Link>
				        <Nav.Link href="/account">Account</Nav.Link>
		              </Nav>
				      <Button href="/Login" variant="outline-primary" >Login / Sign Up</Button>
				    </Navbar.Collapse>
				  </Container>
				</Navbar>

				<Switch>
					<Route exact path="/">
		        		<BooksContainer />
		          	</Route>
		          	<Route path="/books">
			        	<BooksContainer />
			        </Route>
			        <Route path="/account">
			        	<AccountContainer />
			        </Route>
			        <Route path="/login">
			        	<LoginContainer />
			        </Route>
		        </Switch>
		    </Router>

		)
	}

}

export default NavComp