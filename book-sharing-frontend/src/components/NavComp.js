import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

class NavComp extends Component {
	render(){
		return (
			<Navbar bg="light" expand="lg">
			  <Container>
			  <Navbar.Brand href="#home">Welcome to Book Sharing</Navbar.Brand>
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
			      <Nav className="me-auto">
			        <Nav.Link href="#home">Home</Nav.Link>
			        <Nav.Link href="#link">Link</Nav.Link>
	              </Nav>
			    </Navbar.Collapse>
			  </Container>
			</Navbar>

		)
	}

}

export default NavComp