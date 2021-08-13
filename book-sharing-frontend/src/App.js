import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { connect } from 'react-redux'
import { logout } from './actions/userActions'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BooksContainer from './containers/BooksContainer'
import AccountContainer from './containers/AccountContainer'
import LoginContainer from './containers/LoginContainer'
import LoginButton from './components/users/LoginButton'
import LogoutButton from './components/users/LogoutButton'


class App extends Component {

  loggedIn = () => {
    if(this.props.loginStatus === 'LOGGED_IN'){
      return true
    }else{
      return false
    }
  }

  handleLogOut(){

  }


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
                    {this.loggedIn() ? <Nav.Link href="/account">Account</Nav.Link> : null }
                  </Nav>
                    { this.loggedIn() ? <LogoutButton logout={this.props.logout} /> : <LoginButton /> } 
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
    loginStatus: state.user.loginStatus
  }
}

// const mapStateToProps = state => {
//   return {
//     ...state,
//     loggedInStatus: state.user.LoggedInStatus
//   }
// }
export default connect(mapStateToProps, {logout})(App);