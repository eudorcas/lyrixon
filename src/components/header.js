import React from 'react';
import img from '../play.png';


class Header extends React.Component {


    render(){
    return (
        <div className="app-header">
            <div className="container">
                <h1 className={"app-logo"}>Lyrix<span>on</span></h1>
                <img className={"app-logo-img"} src={img}/>

            </div>

        </div>
   )
 }
}

export default Header;