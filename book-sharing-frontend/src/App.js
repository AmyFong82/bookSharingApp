import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute'

import { connect } from 'react-redux'
import { loggedIn } from './components/users/loggedIn'
import { logout } from './actions/userActions'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BooksContainer from './containers/BooksContainer'
import AccountContainer from './containers/AccountContainer'
import LoginContainer from './containers/LoginContainer'
import LoginButton from './components/users/LoginButton'
import LogoutButton from './components/users/LogoutButton'


class App extends Component {

  path = window.location.pathname

  render(){
    return (
      <Container className="app p-3">
        <Router>
          <Navbar bg="light" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="/"><i className="fas fa-book"></i> <b>Book Sharing</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/books">Books</Nav.Link>
                    { loggedIn(this.props.loginStatus) ? <Nav.Link href="/account">Account</Nav.Link> : null }
                  </Nav>
                    { loggedIn(this.props.loginStatus) ? <LogoutButton logout={this.props.logout} /> : <LoginButton/>}    
                  
                </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route exact path={["/", "/books"]} component={BooksContainer} />
            <Route exact path="/account"> 
              {loggedIn(this.props.loginStatus) ? <AccountContainer /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login" component={LoginContainer} path={this.path}/>
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