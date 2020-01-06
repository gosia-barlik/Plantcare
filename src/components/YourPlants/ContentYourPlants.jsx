import React from "react";
import YourPlantsForm from "./YourPlantsForm";

class ContentYourPlants extends React.Component {
    render() {
        return (
            <section className="hero">
                <YourPlantsForm firebaseDB={this.props.firebaseDB}/>
            </section>
        )
    }
}
export default ContentYourPlants;