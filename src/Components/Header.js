import React from 'react';
import '../css/header.css';

const Header = (props) => {


    let loginDisplay;

    if(props.isLoggedIn) {
        loginDisplay = 
            <li>{props.name}
                <ul>
                    <div className="border-long">
                        <li onClick={props.accountPageClicked}>Account Page</li>
                    </div>
                    <div className="border-long">
                        <li>Logout</li>
                    </div>
                </ul>
            </li>;
    } else {
        loginDisplay = <li onClick={props.loginClicked}>Login</li>;
    }

        return (
        <div id="nav-bar">
            <div id="nav-spacer-white"></div>
            <div id="nav-ul">
                <ul>

                    <li onClick={props.homeClicked}>Home</li>
                    <li onClick={props.trackerClicked}>Tracker</li>
                    <li>The Specifics
                        <ul>
                            <div className="border">
                                <li onClick={props.specHomeClicked}>Your Room</li>
                            </div>
                            <div className="border">
                                <li onClick={props.specHouseClicked}>Your House</li>
                            </div>
                            <div className="border">
                                <li onClick={props.specLifeClicked}>Your Life</li>
                            </div>
                        </ul>
                    </li>
                    {loginDisplay}
                </ul>
            </div>
        </div>
        );
}

export default Header;