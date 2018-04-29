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
let fakeServerData = {
  user: {
    name: 'Alec',
    playlists: [
    {
      name: 'High Brow',
      songs: [
      {songName: 'Friday', songLength: 234}, 
      {songName: 'Toxic', songLength: 190}, 
      {songName: 'Pump it', songLength: 200}, 
      {songName: 'Lollipop', songLength: 180}
      ]
    },
    {
      name: 'New Pussy',
      songs: [
      {songName: 'The Trip', songLength: 186}, 
      {songName: 'Heavens only wishful', songLength: 214}, 
      {songName: 'Sink into the floor', songLength: 210}, 
      {songName: 'Cold', songLength: 204}
      ]
    },
    {
      name: 'Hipster Trash',
      songs: [
      {songName: 'Nebraska', songLength: 194}, 
      {songName: 'Youre so cool', songLength: 195}, 
      {songName: 'Some feeling', songLength: 197}, 
      {songName: 'Locket', songLength: 198}
      ]
    },
    {
      name: 'Hip Hoppening',
      songs: [
      {songName: 'Karl drogo sighs', songLength: 196},
      {songName: 'Pride', songLength: 275}, 
      {songName: 'Boredom', songLength: 237}, 
      {songName: 'OG Kush Diet', songLength: 268}
      ]
    }
    ]
  }
}
class PlaylistCounter extends Component {
  render(){
    return(
      <div style={{width: "40%",...inlineBlock}}>
      <h2 style={primaryStyle}> {this.props.playlists.length} text</h2>
      </div>
      );
  }
}

class HourCounter extends Component {
  render(){
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, []);
    let totalPlaylistLength = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.songLength
    } ,0)
    return(
      <div style={{width: "40%",...inlineBlock}}>
      <h2 style={primaryStyle}>{totalPlaylistLength / 60} Minutes</h2>
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
  componentWillMount(){
    this.setState({serverData: fakeServerData});
  }
  render() {
    return (
      <div className="App">
      {this.state.serverData.user &&
        <div>
        <h1 style={primaryStyle}>{this.state.serverData.user.name}'s playlists</h1> 
        
        <PlaylistCounter playlists = {this.state.serverData.user && 
          this.state.serverData.user.playlists}/>
          <HourCounter playlists = {this.state.serverData.user.playlists}/>
          </div>
        }

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