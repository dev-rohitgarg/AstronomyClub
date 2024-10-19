// Home.js
import React, { useEffect, useState } from "react";
import './Home.css';
import '../Section/Section.css';

// function Home() {
// const HomePage = () => {
// const [images, setImages] = useState([]);

// useEffect(() => {
//     // Create an array of 100 image paths
//     const allImages = [];
//     for (let i = 1; i <= 100; i++) {
//         allImages.push(`/images/image${i}.jpg`);
//     }

//     // Function to shuffle and pick 25 random images
//     const getRandomImages = (imageArray, count) => {
//         const shuffled = imageArray.sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, count);
//     };

//     // Set the random images in state
//     setImages(getRandomImages(allImages, 25));
// }, []);

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
