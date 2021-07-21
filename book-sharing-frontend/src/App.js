import React, { Component } from 'react';
import NavContainer from './containers/NavContainer'
import BooksContainer from './containers/BooksContainer';
import Container from 'react-bootstrap/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  render(){
    return (
      <Container className="p-3">
        <NavContainer />
        <BooksContainer />
      </Container>
    );
  }
}

export default App;
