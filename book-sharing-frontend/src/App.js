import React, { Component } from 'react';
import NavContainer from './containers/NavContainer'
import Container from 'react-bootstrap/Container';


class App extends Component {

  render(){
    return (
      <Container className="app p-3">
        <NavContainer />
      </Container>
    );
  }
}

export default App;
