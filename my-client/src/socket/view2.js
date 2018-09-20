import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { connect } from './app';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
        msg:""
    }
    connect(message => {
      console.log(message);
      this.setState({msg:message})
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.msg}
        </p>
      </div>
    );
  }
}

export default App;