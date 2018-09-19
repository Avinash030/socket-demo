import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Main} from './main'

class App extends Component {
  constructor(){
    super()
  this.state={
    time:null,
    cValue:30,
    uValue:null,
    pValue:null,
    result:null,
    colorCode:null
  }
  this.i = 0
  this.mv = []
}
  getTime=()=>{
 let ts=new Date()
 let cTime  = ts.toLocaleTimeString()
 return cTime
  
  }
  changeValue=()=>{
  setInterval(()=>{
    this.setState({time:this.getTime()})
    this.setState({uValue:this.createRandamvalue()})
    this.checkValue()
  },3000)
}
callTimer=()=>{
  setInterval(()=>{
    this.setState({time:this.getTime()})
  },1000)
}
componentDidMount(){
  this.changeValue()
  this.callTimer()
}
componentWillUnmount(){
  this.changeValue()
  this.callTimer()
}

createRandamvalue=()=>{
let rv = Math.floor(Math.random() * 201) - 100;
 return rv
}
checkValue=()=>{
  const {cValue,uValue} = this.state
 this.mv[this.i] = uValue+cValue
 this.i++

 this.setState({cValue:this.mv[this.mv.length-1], pValue:this.mv[this.mv.length-2]})
 if( this.mv[this.mv.length-1] < this.mv[this.mv.length-2]){
  this.setState({result:"Decrease",colorCode:"red"})
 }
 else{
   this.setState({result:"Increase",colorCode:"green"})
 }
}
  render() {
    return (
      <Main>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, <code>src/App.js</code> and save to reload.
        </p> */}
        <h3>Now time is: {this.state.time}</h3>
        <h3>random value: {this.state.uValue}</h3>
        <h3>Previous value: {this.state.pValue}</h3>
        <h3>Current value: {this.state.cValue}</h3>
        <h3>Status: <span style={{background: this.state.colorCode}}>{this.state.result}</span></h3>
      </div>
      </Main>
    );
  }
}

export default App;
