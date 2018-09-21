import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import {Main} from '../main'
const socket = openSocket('http://localhost:5000/');
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
        msg:"",
        id:''
    }
    // socket.on('chat', (message) => {
    //   this.setState({msg:message})
    // })
  }
  sendMsg=(e)=>{
    e.preventDefault()
    socket.emit("chat", {
      value:this.state.id
    })
    this.setState({id:''})
  }
  handleInput=({target})=>{
    this.setState({[target.name]:target.value})
  }

  render() {
    return (
      <Main>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.msg}
        </p>
        <form onSubmit={this.sendMsg}>
        <input onChange={this.handleInput} value={this.state.id} name="id"/>
        <button type="submit" >Click me</button>
        </form>
      </div>
      </Main>
    );
  }
}

export default App;