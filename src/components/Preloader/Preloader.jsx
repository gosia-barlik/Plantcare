import React from "react";
import {withRouter} from "react-router-dom";

class Preloader extends React.Component {

    componentDidMount() {
        let preloaderEl = document.querySelector(`.preloader`);
        this.setTimeotId = setTimeout(() => {
            preloaderEl.classList.add(`preloader-hiding`);
            preloaderEl.addEventListener(`transitionend`, function () {
                    this.classList.add(`preloader-hidden`);
                    this.classList.remove(`preloader-hiding`);
                }
            );
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.setTimeotId);
    }

    render() {
        return (
            <div className="preloader">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        )
    }

}


export default withRouter(Preloader);