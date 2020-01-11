import React from "react";
import {withRouter} from "react-router-dom";

class LoginForm extends React.Component {

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setUsername();
        this.props.history.push("/yourplants");
    };

    setUsername=()=>{
    let name = localStorage.savedName ? localStorage.savedName : '';
    const nameContainer = document.querySelector('.main-menu .name');

    nameContainer.innerText = name;
    let newName = document.querySelector('#field-name').value;
    localStorage.setItem('savedName', newName);
    nameContainer.innerText = newName;
    };

    render() {
        return (
            <div className = "form-login-area fade-in">
                <form className="form" id="loginForm" onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <div>login</div>
                        {/*<div><span>not a member yet?</span> <a href="#" className ="joinus">join us</a></div>*/}
                    </div>
                    <div className="form-row">
                        <label>email or user name</label>
                        <input type="text" name="name" required id="field-name" data-error="Wypełnij to pole"
                            // pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+"
                        />
                    </div>
                    {/*<div className="form-row">*/}
                    {/*<label>password</label>*/}
                    {/*<input type="email" name="email" required id="field-email" data-error="Wpisz poprawny email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+"/>*/}
                    {/*</div>*/}
                    <div className="form-row">
                        <label className="checkbox-cnt">
                            <input type="checkbox" data-error="Musisz wypełnić pole" name="regulation"/>
                            <i className="state" aria-hidden="true"></i>

                        </label>
                        <span>keep me logged in</span>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="submit-btn set-name">LOG IN !</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);