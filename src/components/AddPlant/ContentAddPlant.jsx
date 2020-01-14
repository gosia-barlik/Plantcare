import React from "react";
import AddPlantForm from "./AddPlantForm";

class ContentAddPlant extends React.Component {
    render() {
        return (
            <section className="hero">
                <AddPlantForm create={this.props.create} firebase={this.props.firebase}/>
            </section>
        )
    }
}
export default ContentAddPlant;