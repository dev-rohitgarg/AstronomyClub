// About.js
import React from "react";
import './About.css';
import '../Section/Section.css';

function About() {
    return (
        <div id="section3" className="section">
            <div className="left-div About-section">
                <h1 className="About-text">About</h1>
                <p>At Astronomy Club, we are passionate about unravelling the mysteries of the
                    universe and fostering a community of like-minded individuals who share a
                    fascination for the cosmos. Our astronomy club is dedicated to creating a space
                    where enthusiasts of all levels can come together to explore, learn, and marvel
                    at the wonders of the night sky.
                    <br />
                    We've organized meteor shower watching events, educational sessions to teach students telescope
                    and binocular usage, and captured
                    stunning photos of celestial bodies during these memorable gatherings.
                    Our journey into the cosmos continues!
                </p>
            </div>

            <div className="right-div Image-section">
                <img src="/img/Astronaut.png" alt="astronaut image" />
            </div>
        </div>
    );
}

export default About;
