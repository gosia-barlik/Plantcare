import React from "react";
import YourPlants from "../Common/YourPlants";
import ContactForm from "./ContactForm";

class ContentMain extends React.Component {
    render() {
        return (
            <section className="hero">
                <YourPlants/>
                <ContactForm/>
            </section>
        )
    }
}

export default ContentMain;