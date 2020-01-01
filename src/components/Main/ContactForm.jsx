import React from "react";

class ContactForm extends React.Component {
    render() {
        return (
            <div className="form-contact-area">
                <form className="form" id="contactForm" method="post">
                    <div className="form-row">
                        <label>Name*
                            <input type="text" name="name" required id="field-name" data-error="Wypełnij to pole"
                                   pattern="[a-zA-ZąĄććęęłŁńŃóÓśŚżŻŹŹ ]+"/>
                        </label>
                    </div>
                    <div className="form-row">
                        <label>Email*</label>
                        <input type="email" name="email" required id="field-email" data-error="Wpisz poprawny email"
                               pattern="[^@\s]+@[^@\s]+\.[^@\s]+"/>
                    </div>
                    <div className="form-row">
                        <label>Message*</label>
                        <textarea name="message" required data-error="Musisz wypełnić pole" id="field-message"
                                  pattern=".+"></textarea>
                    </div>
                    <div className="form-row">
                        <label className="checkbox-cnt">
                            <input type="checkbox" data-error="Musisz wypełnić pole" name="regulation"/>
                            <i className="state" aria-hidden="true"></i>
                            <span>Lorem ipsum dolor sit amet</span>
                        </label>
                    </div>
                    <div className="form-row">
                        <button type="submit" className="submit-btn">
                            SEND
                        </button>
                    </div>
                </form>
            </div>

        )
    }
}
export default ContactForm;