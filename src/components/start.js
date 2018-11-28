import React from 'react';
import img from '../play.png'

class Start extends React.Component {

  render(){

    return (
        <div className={"start"}>
            <h1>Find your favourite song: <span>track</span> and <span>lyrics</span> together!</h1>
            <img src={img}/>
        </div>
   )
 }
}

export default Start;