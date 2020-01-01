import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>FOLLOW US ON SOCIAL MEDIA</p>
                <ul className="tools">
                    <li><a href="#"> <img src="images/icons/iconmonstr-facebook-1-240.png" alt="fb"
                                          className="tools-item"/> </a></li>
                    <li><a href="#"><img src="images/icons/iconmonstr-twitter-1-240.png" alt="tw" className="tools-item"/>
                    </a></li>
                    <li><a href="#"><img src="images/icons/iconmonstr-instagram-11-240.png" alt="insta"
                                         className="tools-item"/></a></li>
                </ul>
            </footer>
        )
    }
}
export default Footer;