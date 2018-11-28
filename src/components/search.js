import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            artist: ''
        }
    }
    handleTitleChange = (e) =>{
        this.setState({
            title: e.currentTarget.value
        })
    };
    handleArtistChange = (e) =>{
        if(e.currentTarget.value==="beyonce"){
            this.setState({
                artist: "beyoncé"
            }) // ;-) it doesn't work without "é" and this app without Beyoncé doesn't make sense
        }
        else{
        this.setState({
            artist: e.currentTarget.value
        })
        }
    };
    selectAll = (e, id) =>
    {
        document.getElementById(id).focus();
        document.getElementById(id).select();

    };
    render(){
        return (
            <div className="app-search">
                <h3 className="search-header">Search for a <span>song:</span> </h3>
                <input id="input_1" onClick={e=>this.selectAll(e, "input_1")} onChange={this.handleTitleChange} type="text" placeholder="write a song title"
                       value={this.state.title}/>
                <input id="input_2" onClick={e=>this.selectAll(e,"input_2")} onChange={this.handleArtistChange} type="text" placeholder="write a artist name"
                       value={this.state.artist}/>
                <p>{this.props.message}</p>
                <button className="search"
                        onClick={e => this.props.searchSong(this.state.title, this.state.artist)}>Search <i
                    className="fas fa-search"></i>
                </button>

            </div>
        )
    }
}

export default Search;