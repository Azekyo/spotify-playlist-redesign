import React, { Component } from 'react';
import logo from './resources/logo.svg';
import './App.css';

let primaryColour = '#fff';
let primaryStyle = {
  color: primaryColour
}
let inlineBlock = {
  display: `inline-block`
}
class Aggregate extends Component {
  render(){
    return(
      <div style={{width: "40%",...inlineBlock}}>
      <h2 style={primaryStyle}> Numbers</h2>
      </div>
      );
  }
}

class Filter extends Component {
  render(){
    return(
      <div>
      <img/>
      <label for="filter" style={{...primaryStyle, 'font-size': `20px`, 'margin-right': `10px`}}>Filter</label>
      <input type='text' id='filter'/>
      </div>
      );
  }
}

class Playlist extends Component {
  render(){
    return(
      <div style={{display: `inline-block`, margin: `40px`}}>
      <img src="" alt=""/>
      <h3 style={{...primaryStyle}}>Playlist Title</h3>
      <ul style={{...primaryStyle}}>
      <li>Song 1</li>
      <li>Song 2</li>
      <li>Song 3</li>
      </ul>
      </div>
      );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={primaryStyle}>Yo</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      </div>
      );
  }
}
export default App;
