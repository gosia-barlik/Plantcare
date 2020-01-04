import React from "react";
import {withRouter} from "react-router-dom";

class MyPlants extends React.Component {

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.history.push("/yourplants");
    };

    render() {
        return (
            <div className="your-plants-wrapper">
                <a href="#" className="your-plants-txt"onClick={this.handleSubmit}>your plants<img src="images/icons/my plants.png" alt="logo"
                                                                    className="your-plants"/></a>
            </div>

        )
    }
}

export default withRouter(MyPlants);