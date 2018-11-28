import React from "react";


class Player extends React.Component {

    ternaryFunction = (conditionA, conditionB) => {
      if(!conditionA){
          return <a href="https://open.spotify.com/" target="_blank"><div className="spotify-logo"/></a>
      }
      if(conditionB) {
          return <div className={"loader"}/>
      }

      else {
          return <iframe src={ `https://open.spotify.com/embed/track/${this.props.track}`} width="320" height="380"
                         frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      }
};
    render(){



    return (
        <div className="app-player">
            {console.log(this.props)}
            {this.ternaryFunction(this.props.run, this.props.loading)}
        </div>
   )
 }
}

export default Player;

