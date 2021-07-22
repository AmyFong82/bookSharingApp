import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

class NavComp extends Component {
	render(){
		return (
			<Navbar bg="light" expand="lg" fixed="top">
			  <Container>
			  <Navbar.Brand href="#home"><i class="fas fa-book"></i> <b>Book Sharing</b></Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="me-auto">
			        <Nav.Link href="/books">Books</Nav.Link>
			        <Nav.Link href="/account">Account</Nav.Link>
	              </Nav>
			      <Button variant="outline-primary" >Login / Sign Up</Button>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>

		)
	}

}

export default NavComp