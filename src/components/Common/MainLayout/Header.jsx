import React from "react";
import {withRouter} from "react-router-dom";
import {
    HashRouter,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="center-wrapper">
                    <a href="#"> <img src="images/icons/logo.png" alt="logo" className="logo"/> </a> <span
                    className="logo-txt">take care of your plants</span>
                    <nav className="main-nav">
                        <ul className="main-menu">
                            <NavLink to="/about"><li className="name">about</li></NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;