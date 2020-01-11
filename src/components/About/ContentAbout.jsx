import React from "react";
import About from "./About";

class ContentAbout extends React.Component {
    render() {
        return (
            <section className="hero">
                <About create={this.props.create} firebaseDB={this.props.firebaseDB}/>
            </section>
        )
    }
}
export default ContentAbout;