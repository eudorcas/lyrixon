import React from 'react';
import Start from  './start';

class Board extends React.Component {

  render(){
      return (
        <div className="board">
            {this.props.loading?<div className="loader"/>:null}
            <p>
                {this.props.isRunning?this.props.text:<Start />}
            </p>

            {this.props.isText?<div className="board-scroll"/>:null}
        </div>
   )
 }
}

export default Board;