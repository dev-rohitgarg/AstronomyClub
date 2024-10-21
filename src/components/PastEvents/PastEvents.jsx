// About.js
import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import './PastEvents.css';
import '../Section/Section.css';

const images = [
    {
        // src: 'https://via.placeholder.com/300x200',
        src: '/img/event1.jpg',
        title: 'Image Title 1',
        description: 'Some content about image 1 goes here.',
    },
    {
        src: '/img/event2.jpg',
        title: 'Image Title 2',
        description: 'Some content about image 2 goes here.',
    },
    {
        // src: 'https://via.placeholder.com/300x200',
        src: '/img/moon1r.png',
        title: 'Image Title 1',
        description: 'Some content about image 1 goes here.',
    },
    {
        src: '/img/moon2r.png',
        title: 'Image Title 2',
        description: 'Some content about image 2 goes here.',
    },

];
function PastEvents() {

    return (
        <div id="section5" className="section">
            <div className="Telescope Image-section">
                <img src="/img/telescope-r.png" alt="astronaut image" />
            </div>
            <div className="Events About-section">
                <h1 className="PastEvent-text">PastEvent</h1>
                <Carousel />

            </div>

        </div>
    );
}

export default PastEvents;
