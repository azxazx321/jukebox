import React, { Component } from 'react'
import AudioPlayer from './AudioPlayer'

export default class Jukebox extends Component {
    state = {
        song: ''
    }

    chooseSong = (song) => {
        console.log(song)
        this.setState({song})
    }

    render() {
        return (
        <div>
            <h1>Jukebox</h1>
            <p><button onClick={()=>{this.chooseSong('')}}>Disable Audio</button></p>
            <span>Play song:</span>
            <button onClick={()=>{this.chooseSong('./songs/fantasy-classical.mp3')}}>fantasy</button>
            <button onClick={()=>{this.chooseSong('./songs/gates-of-heaven.mp3')}}>Gates</button>
            <button onClick={()=>{this.chooseSong('./songs/grand-orchestra.mp3')}}>Gates</button>
            <button onClick={()=>{this.chooseSong('./songs/piano-song.mp3')}}>Gates</button>

            
            {this.state.song === '' ? <p>audio disabled</p> : <AudioPlayer audioURL={this.state.song}/>}
            
            </div>


        )
    }
}
