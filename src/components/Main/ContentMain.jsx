import React from "react";
import MyPlants from "../Common/MyPlants";
import ContactForm from "./ContactForm";

class ContentMain extends React.Component {
    render() {
        return (
            <section className="hero">
                <MyPlants/>
                <ContactForm/>
            </section>
        )
    }
}

export default ContentMain;