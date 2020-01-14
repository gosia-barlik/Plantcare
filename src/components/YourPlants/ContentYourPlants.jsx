import React from "react";
import YourPlantsForm from "./YourPlantsForm";

class ContentYourPlants extends React.Component {
    render() {
        return (
            <section className="hero">
                <YourPlantsForm firebase={this.props.firebase}/>
            </section>
        )
    }
}
export default ContentYourPlants;