// Home.js
import React, { useEffect, useState } from "react";
import './Home.css';
import '../Section/Section.css';

const Home = ({ imageCount = 25, imagesArray }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Function to shuffle and pick a certain number of random images
        const getRandomImages = (imageArray, count) => {
            if (imageArray.length <= count) {
                return imageArray;  // If we have fewer images than the count, return all
            }
            const shuffled = imageArray.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        };

        // Set the random images in state
        if (imagesArray && imagesArray.length > 0) {
            setImages(getRandomImages(imagesArray, imageCount));
        }
    }, [imagesArray, imageCount]);

    return (
        <div id="section1" className="section">
            <h1 className="welcome-text ">Welcome to My Website</h1>
            <div className="image-grid">
                {/* Images will be loaded here by JavaScript  */}
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Random ${index}`} className="small-image" />
                ))}
            </div>
        </div>

    );
}

export default Home;
