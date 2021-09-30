import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from 'react-redux'
import { loggedIn } from './components/users/loggedIn'
import { logout } from './actions/userActions'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import BooksContainer from './containers/BooksContainer'
import EditBookContainer from './containers/EditBookContainer'
import AccountContainer from './containers/AccountContainer'
import LoginContainer from './containers/LoginContainer'
import LoginButton from './components/users/LoginButton'
import LogoutButton from './components/users/LogoutButton'
import Request from './components/requests/Request'
import CancelRequest from './components/requests/CancelRequest'
import ShareBookBtn from './components/books/ShareBookBtn'
import NewBookForm from './components/books/NewBookForm'


class App extends Component {

  render(props){
    return (
      <Router>
        <Container className="app p-3">
          <Navbar bg="light" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="/"><b>Book Sharing!</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/books">Books</Nav.Link>
                    { loggedIn(this.props.loginStatus) ? <Nav.Link href="/account">Account</Nav.Link> : null }
                  </Nav>
                    <ShareBookBtn />
                  { loggedIn(this.props.loginStatus) ? <LogoutButton logout={this.props.logout} /> : <LoginButton/> }   
                </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route exact path={["/", "/books"]} render={routerProps => <BooksContainer {...routerProps} />} />
            {/*<Route exact path="/account" render={routerProps => <AccountContainer {...routerProps} /> } /> */}
            <Route exact path="/account"> 
            {/*{loggedIn(this.props.loginStatus) ? <AccountContainer props={...routerProps}/> : <Redirect to="/login" />}*/}
              {loggedIn(this.props.loginStatus) ? <AccountContainer /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login" render={routerProps => <LoginContainer {...routerProps} props={this.props} />} />
            <Route exact path="/books/new" render={routerProps => <NewBookForm {...routerProps} props={this.props}/>} />
            <Route path="/book_edit/:id" render={routerProps => <EditBookContainer {...routerProps} props={this.props}/>} />
            <Route path="/books/:id" render={routerProps => <Request {...routerProps} props={this.props}/>} />
            <Route path="/requests/:id" render={routerProps => <CancelRequest {...routerProps} props={this.props}/>} />
            {/*<Route exact path="/request" component={Request} />*/}
            {/*<Route path='/books/:id' render={routerProps => <Request {...routerProps} />} />*/}
            {/*<Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />*/}
          </Switch>
        </Container>
      </Router>

    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.user.loginStatus,
    books: state.books
  }
}

export default connect(mapStateToProps, {logout})(App);