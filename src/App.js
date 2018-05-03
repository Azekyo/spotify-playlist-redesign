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
			name: 'Two',
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
			{songName: 'Karl Drogo sighs', songLength: 196},
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
			<h2 style={primaryStyle}> {this.props.playlists.length} {(this.props.playlists.length < 2) ? "list" : "lists"}</h2>
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
			<h2 style={primaryStyle}>{parseInt(totalPlaylistLength / 60)} Minutes</h2>
			</div>
			);
	}
}

class Filter extends Component {
	render(){
		return(
			<div>
			<img/>
			<label for = "filter" style = {{...primaryStyle, 'font-size': `20px`, 'margin-right': `10px`}}>Filter</label>
			<input type = 'text' 
			id = 'filter' 
			placeholder = 'filter by playlist title'
			onChange = {event => this.props.onInput(event.target.value)}
			/>
			</div>
			);
	}
}

class Playlist extends Component {
	render(){
		return(
			<div style={{display: `inline-block`, margin: `40px`}}>
			<img src="" alt=""/>
			<h3 style={{...primaryStyle}}>{this.props.playlist.name}</h3>
			<ul style={{...primaryStyle}}>
			{this.props.playlist.songs.map(songs => 
				<li>{songs.songName}</li>
				)}
			</ul>
			</div>
			);
	}
}

class App extends Component {
	constructor(){
		super()
		this.state = {
			serverData: fakeServerData,
			filterString: ''
		};
	}
	render() {
		let filteredPlaylists = this.state.serverData.user.playlists.filter( playlist =>
					playlist.name.toLowerCase().includes(
						this.state.filterString.toLowerCase())
					)
		return (
			<div className="App">
			{this.state.serverData.user &&
				<div>
				<h1 style={primaryStyle}>
					{this.state.serverData.user.name}'s playlists
				</h1> 
				
				<PlaylistCounter playlists = {filteredPlaylists}/>
					<HourCounter playlists = {filteredPlaylists}/>
					</div>
				}

				<Filter onInput = {text => 
					this.setState({filterString: text})
				}/>
				{filteredPlaylists.map(playlist => 
						<Playlist playlist = {playlist} />)}
					</div>
					);
	}
}
export default App;