import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { connect } from 'react-redux'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import BooksContainer from './containers/BooksContainer'
import AccountContainer from './containers/AccountContainer'
import LoginContainer from './containers/LoginContainer'


class App extends Component {
  // constructor(){
  //   super();

  //   this.checkLoggedIn = this.checkLoggedIn.bind(this)
  //   this.componentDidUpdate = this.componentDidUpdate.bind(this)
  // }

  // componentDidUpdate(){
  //   console.log(this.checkLoggedIn())
  //   if(this.checkLoggedIn() === "LOGGED_IN"){
  //     return(<Redirect to="/account" />)
  //   }
  // }

  // checkLoggedIn(){
  //   return this.props.user.loggedInStatus
  // }


  // handleLogout() {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN",
  //     user: {}
  //   });
  // }

  // handleLogin(data) {
  //   this.setState({
  //     loggedInStatus: "LOGGED_IN",
  //     user: data.user
  //   });
  // }


  render(){
    return (
      <Container className="app p-3">
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
            <Route exact path="/" component={BooksContainer} />
            <Route exact path="/books" component={BooksContainer} />
            <Route exact path="/account" component={AccountContainer} />
            <Route exact path="/login" component={LoginContainer} />
          </Switch>
        </Router>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

// const mapStateToProps = state => {
//   return {
//     ...state,
//     loggedInStatus: state.user.LoggedInStatus
//   }
// }
export default connect(mapStateToProps)(App);