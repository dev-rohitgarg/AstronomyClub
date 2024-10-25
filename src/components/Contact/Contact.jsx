// // Contact.js
// import React from "react";
// import './Contact.css';
// import '../Section/Section.css';
// function Contact() {
//     return (
//         <div id="section4" className="section">
//             <h2>Contact</h2>
//             <p>Feel free to reach out!</p>
//         </div>
//     );
// }

// export default Contact;

import React from 'react';
import './Contact.css';
import '../Section/Section.css';
import { FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons

const Contact = () => {
    return (
        <div className="section" id='section4'>
            <h2>Contact Us</h2>
            <div className="contact-details">
                <div className="contact-item">
                    <strong>Club Secretary:</strong> Rohit Garg&nbsp;
                    <FaEnvelope /> <a href="mailto:rohitgarg@mail.com">rohitgarg@mail.com</a>
                </div>
                <div className="contact-item">
                    <strong>Faculty In-charge:</strong> Dr. John Doe&nbsp;
                    <FaEnvelope /> <a href="mailto:johndoe@university.edu">johndoe@university.edu</a>
                </div>
                <div className="contact-item">
                    <FaInstagram /> <a href="https://instagram.com/clubname" target="_blank" rel="noopener noreferrer">instagram.com/clubname</a>
                </div>
                <div className="contact-item">
                    <FaEnvelope /> <a href="mailto:clubname@university.edu">clubname@university.edu</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
