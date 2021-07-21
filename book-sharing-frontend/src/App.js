import React, { Component } from 'react';
import BooksContainer from './containers/BooksContainer';
import Container from 'react-bootstrap/Container';


class App extends Component {

  render(){
    return (
      <Container className="p-3">
        <BooksContainer />
      </Container>
    );
  }
}

export default App;
