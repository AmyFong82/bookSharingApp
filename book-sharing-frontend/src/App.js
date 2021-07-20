import React, { Component } from 'react';
import BooksContainer from './containers/BooksContainer';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <BooksContainer />
      </div>
    );
  }
}

export default App;
