import React, { Component } from 'react';
import Player from './components/player';
import Header from './components/header';
import Board from './components/board';
import Search from './components/search';
import './App.css';
import axios from "axios";
const lyricsApiKey = "GjUb6pll8sKJLUwfpS9N8hH70pb11PNE2kXt0cVpUto0857oKpnVf6vMgy8fgqnQ";
var Spotify = require('spotify-web-api-js');

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            text: '',
            message: '',
            artist: '',
            title: '',
            track: '',
            isRunning: false,
            isText: false,
            loadingText: false,
            loadingTrack: false
        }
    }
    searchTerms = (t, a) => {
        this.setState({
            isRunning: true,
            loadingText: true,
            loadingTrack: true,
            text: ""
        });

        if(t==="" || a===""){
            this.setState({
                text: "You have to fill in both text fields!",
                isText: false,
                loadingText: false
            })
        }
        else {
            axios.get(`https://orion.apiseeds.com/api/music/lyric/${a}/${t}?apikey=${lyricsApiKey}`)
                .then(res => {
                    this.setState({
                        text: res.data.result.track.text,
                        isText: true,
                        loadingText: false
                    })

                })
                .catch(
                    res => this.setState({

                        text: "Lyrics not found",
                        isText: false,
                        loadingText: false
                    })
                );
            fetch('https://accounts.spotify.com/api/token?grant_type=client_credentials', {
                method: 'POST',
                headers: {
                    'Authorization': `Basic YTE1NzczMTZkOGVhNDAzOThmN2ViY2NiMmZiMGJlMDg6ZjUyMjhmY2FkN2I5NDk3NmI4OTQ0NWY3YmQwMzYzOTY=`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(r => r.json())
                .then(data => {
                    return fetch(`https://api.spotify.com/v1/search?q=track:${t}+artist:${a}&type=track`, {
                        headers: {
                            'Authorization': `Bearer ${data.access_token}`,
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                })
                .then(res => res.json())
                .then(data => {
                        console.log(data);
                        if (!data.tracks.items[0].uri.length<1) {
                            this.setState({
                                track: data.tracks.items[0].uri.substr(14),
                                loadingTrack: false
                            })
                        }


                    }

                )
                .catch(res=> {
                    this.setState ({
                        track: '',
                        loadingTrack: false
                    })
                })

        }
    };

    render() {

        return (
        <>
         <Header />
         <div className="container app-desktop">
            <Board text={this.state.text} isText={this.state.isText} loading={this.state.loadingText} isRunning={this.state.isRunning}/>
             <div>
                <Search message={this.state.message} searchSong={this.searchTerms}/>


                      <Player run={this.state.isRunning} track={this.state.track} loading={this.state.loadingTrack}/>



             </div>
         </div>
        </>
        )
    }
}

export default App;
