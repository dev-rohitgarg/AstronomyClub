// // Navbar.js
// import React from "react";
// import './Navbar.css';

// function Navbar() {
//     return (
//         <nav className="navbar">
//             <a href="#section1">Home</a>
//             <a href="#section3">About</a>
//             <a href="#section2">Gallery</a>
//             <a href="#section5">Past Events</a>
//             <a href="#section4">Contact</a>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                {/* Your existing nav links here */}
                <a href="#section1">Home</a>
                <a href="#section3">About</a>
                <a href="#section2">Gallery</a>
                <a href="#section5">Past Events</a>
                <a href="#section4">Contact</a>
                {/* ... other links ... */}
            </div>
        </nav>
    );
};

export default Navbar;
