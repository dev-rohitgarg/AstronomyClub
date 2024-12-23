// App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// import ImageGallery from "./components/Home/ImageGallery";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PastEvents from "./components/PastEvents/PastEvents";


const imageArray = [
  '/img/moon1r.png',
  '/img/moon2r.png',
  '/img/moon3r.png',
  '/img/moon4r.png',
  '/img/ran/1.jpg',
  '/img/ran/2.webp',
  '/img/ran/3.jpg',
  '/img/ran/4.jpg',
  '/img/ran/5.webp',
  '/img/ran/6.jpg',
  '/img/ran/7.jpg',
  '/img/ran/8.jpg',
  '/img/ran/9.jpg',
  '/img/ran/10.webp',
  '/img/ran/11.webp',
  '/img/ran/12.jpg',
  '/img/ran/13.jpg',
  '/img/ran/14.webp',
  '/img/ran/15.webp',
  '/img/ran/16.webp',
  '/img/ran/17.jpg',
  '/img/ran/18.webp',
  '/img/ran/19.webp',
  '/img/ran/21.jpg',
  '/img/ran/22.jpg',
  '/img/ran/24.jpg',
  '/img/ran/26.jpg',
  '/img/ran/28.jpg',
  '/img/ran/29.jpg',
  '/img/ran/29.webp',
  '/img/ran/30.webp',
  '/img/ran/31.webp',
  '/img/ran/32.jpg',
  '/img/ran/33.png',
  '/img/ran/34.webp',
  '/img/ran/35.jpg',
  '/img/ran/36.jpg',
  '/img/ran/36.webp',
  '/img/ran/37.webp',
  '/img/ran/38.jpg',
  '/img/moon1r.png',
  '/img/moon2r.png',
  '/img/moon3r.png',
  '/img/moon4r.png',
  '/img/ran/1.jpg',
  '/img/ran/2.webp',
  '/img/ran/3.jpg',
  '/img/ran/4.jpg',
  '/img/ran/5.webp',
  '/img/ran/6.jpg',
  '/img/ran/7.jpg',
  '/img/ran/8.jpg',
  '/img/ran/9.jpg',
  '/img/ran/10.webp',
  '/img/ran/11.webp',
  '/img/ran/12.jpg',
  '/img/ran/13.jpg',
  '/img/ran/14.webp',
  '/img/ran/15.webp',
  '/img/ran/16.webp',
  '/img/ran/17.jpg',
  '/img/ran/18.webp',
  '/img/ran/19.webp',
  '/img/ran/21.jpg',
  '/img/ran/22.jpg',
  '/img/ran/24.jpg',
  '/img/ran/26.jpg',
  '/img/ran/28.jpg',
  '/img/ran/29.jpg',
  '/img/ran/29.webp',
  '/img/ran/30.webp',
  '/img/ran/31.webp',
  '/img/ran/32.jpg',
  '/img/ran/33.png',
  '/img/ran/34.webp',
  '/img/ran/35.jpg',
  '/img/ran/36.jpg',
  '/img/ran/36.webp',
  '/img/ran/37.webp',
  '/img/ran/38.jpg'
];
// // Import all images using import.meta.glob
// const images = import.meta.glob('/img/ran/*.{jpg,webp,png}');
// console.log(images);

// // Convert the object into an array of image URLs
// const imageArray = [];

// // Simple for loop to iterate through the object keys
// for (const path in images) {
//   // Use the key to dynamically import the image and push it to the array
//   images[path]().then((module) => {
//     imageArray.push(module.default); // Add the image URL to the images array
//   });
//   console.log(imageArray);
// }
// // Now you have an array of image URLs you can use in your component



function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Home imageCount={24} imagesArray={imageArray} />
      {/* <ImageGallery /> */}
      <About />
      <Gallery />
      <PastEvents />
      <Contact />
    </div>
  );
}

export default App;
