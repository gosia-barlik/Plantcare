import React from "react";
import AddPlantForm from "./AddPlantForm";

class ContentAddPlant extends React.Component {
    render() {
        return (
            <section className="hero">
                <AddPlantForm create={this.props.create} firebaseDB={this.props.firebaseDB}/>
            </section>
        )
    }
}
export default ContentAddPlant;