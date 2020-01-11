import React from "react";
import {withRouter} from "react-router-dom";
import {
    HashRouter,
    Route,
    Link,
    NavLink,
    Switch
} from 'react-router-dom';

class About extends React.Component {

    render() {
        return (
            <div className="form-about-area fade-in">
                <div className="form-row-1">
                    <button type="button" onClick={this.handleClose} className="close-btn" >
                        <img src="images/icons/iconmonstr-x-mark-1-240.png" alt="exit" className="icon" id={'about-exit-icon'}/>
                    </button>
                </div>
                <div className="form-row-1">
                    <p><span>Plantcare</span> will help you keep track of your house plants. </p>
                    {/*<div><img src="images/icons/my plants.png" alt="myplants"*/}
                              {/*className="icon"/></div>*/}
                    <p>Simply <NavLink to="/" className={'mainlink'}> log in </NavLink>and start building your digital care calendar for each plant in your house.</p>
                </div>
            </div>)
    }
}


export default About;