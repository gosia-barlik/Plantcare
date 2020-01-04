import React from "react";
import {withRouter} from "react-router-dom";

class YourPlantsForm extends React.Component {

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.history.push("/addplant");
    };

    render() {
        return (
            <div className = "form-yourplants-area">
                <form className="form" id="yourplantsForm" onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <button type="submit" className="submit-btn">
                            <img src="images/icons/iconmonstr-plus-2-240.png" alt="add"
                                 className="add"/>ADD PLANT</button>
                    </div>
                    <div className="form-row">
                        <div>you have no plants yet</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(YourPlantsForm);