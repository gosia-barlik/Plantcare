import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="center-wrapper">
                    <a href="#"> <img src="images/icons/logo.png" alt="logo" className="logo"/> </a> <span className="logo-txt">take care of your plants</span>
                    <nav className="main-nav">
                        <ul className="main-menu">
                            <li className="name"></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}


export default Header;