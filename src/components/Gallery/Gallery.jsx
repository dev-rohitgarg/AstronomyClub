// // Gallery.js
// import React from "react";
// import './Gallery.css';
// import '../Section/Section.css';
// function Gallery() {
//     return (
//         <div id="section2" className="section gallery">
//             <h2 className="section-text">Gallery</h2>
//             <div className="photos">
//                 <img src="/img/Astronaut.png" alt="Sample 1" />
//                 <img src="/img/moon1r.png" alt="Sample 2" />
//                 <img src="/img/moon4r.png" alt="Sample 3" />
//                 <img src="/img/moon2r.png" alt="Sample 4" />
//                 <img src="/img/Astronaut.png" alt="Sample 1" />
//                 <img src="/img/moon1r.png" alt="Sample 2" />
//                 <img src="/img/moon4r.png" alt="Sample 3" />
//                 <img src="/img/moon2r.png" alt="Sample 4" />
//                 <img src="/img/Astronaut.png" alt="Sample 1" />
//                 <img src="/img/moon1r.png" alt="Sample 2" />
//                 <img src="/img/moon4r.png" alt="Sample 3" />
//                 <img src="/img/moon2r.png" alt="Sample 4" />
//                 <img src="/img/Astronaut.png" alt="Sample 1" />
//                 <img src="/img/moon1r.png" alt="Sample 2" />
//                 <img src="/img/moon4r.png" alt="Sample 3" />
//                 <img src="/img/moon2r.png" alt="Sample 4" />
//             </div>
//         </div>
//     );
// }

// export default Gallery;

// import React from 'react';
// import './Gallery.css';
// import '../Section/Section.css';

// const images = [
//     {
//         src: 'https://via.placeholder.com/300x200',
//         title: 'Image Title 1',
//         description: 'Some content about image 1 goes here.',
//     },
//     {
//         src: 'https://via.placeholder.com/300x200',
//         title: 'Image Title 2',
//         description: 'Some content about image 2 goes here.',
//     },
//     {
//         src: 'https://via.placeholder.com/300x200',
//         title: 'Image Title 3',
//         description: 'Some content about image 3 goes here.',
//     },
// ];

// function Gallery() {
//     return (
//         <div id='section2' className="carousel">
//             {images.map((image, index) => (
//                 <div key={index} className="carousel-item">
//                     <img src={image.src} alt={image.title} className="carousel-image" />
//                     <div className="image-content">
//                         <h3>{image.title}</h3>
//                         <p>{image.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Gallery;

// import React, { useEffect, useRef } from 'react';
// import './Gallery.css';
// import '../Section/Section.css';

// const images = [
// {
//     // src: 'https://via.placeholder.com/300x200',
//     src: '/img/moon1r.png',
//     title: 'Image Title 1',
//     description: 'Some content about image 1 goes here.',
// },
// {
//     src: '/img/moon2r.png',
//     title: 'Image Title 2',
//     description: 'Some content about image 2 goes here.',
// },
// {
//     src: '/img/moon3r.png',
//     title: 'Image Title 3',
//     description: 'Some content about image 3 goes here.',
// },
//     {
//         // src: 'https://via.placeholder.com/300x200',
//         src: '/img/moon1r.png',
//         title: 'Image Title 1',
//         description: 'Some content about image 1 goes here.',
//     },
//     {
//         src: '/img/moon2r.png',
//         title: 'Image Title 2',
//         description: 'Some content about image 2 goes here.',
//     },
//     {
//         src: '/img/moon3r.png',
//         title: 'Image Title 3',
//         description: 'Some content about image 3 goes here.',
//     },
//     {
//         // src: 'https://via.placeholder.com/300x200',
//         src: '/img/moon1r.png',
//         title: 'Image Title 1',
//         description: 'Some content about image 1 goes here.',
//     },
//     {
//         src: '/img/moon2r.png',
//         title: 'Image Title 2',
//         description: 'Some content about image 2 goes here.',
//     },
//     {
//         src: '/img/moon3r.png',
//         title: 'Image Title 3',
//         description: 'Some content about image 3 goes here.',
//     },
// ];

// function Gallery() {
//     const carouselRef = useRef(null);

//     useEffect(() => {
//         const carousel = carouselRef.current;
//         let scrollAmount = 0;

//         const slideCarousel = () => {
//             scrollAmount += 300; // Adjust based on item width
//             if (scrollAmount >= carousel.scrollWidth) {
//                 scrollAmount = 0; // Reset to the beginning
//             }
//             carousel.scrollTo({
//                 top: 0,
//                 left: scrollAmount,
//                 behavior: 'smooth',
//             });
//         };

//         const intervalId = setInterval(slideCarousel, 3000); // Adjust interval as needed

//         return () => clearInterval(intervalId);
//     }, []);

//     return (
//         <div ref={carouselRef} className="carousel" id='section2'>
//             {images.map((image, index) => (
//                 <div key={index} className="carousel-item">
//                     <img src={image.src} alt={image.title} className="carousel-image" />
//                     <div className="image-content">
//                         <h3>{image.title}</h3>
//                         <p>{image.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Gallery;


import React, { useEffect, useRef, useState } from 'react';
import './Gallery.css';
import '../Section/Section.css';

const images = [
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
    {
        src: '/img/moon3r.png',
        title: 'Image Title 3',
        description: 'Some content about image 3 goes here.',
    },

    {
        // src: 'https://via.placeholder.com/300x200',
        src: '/img/moon1.jpg',
        title: 'Image Title 1',
        description: 'Some content about image 1 goes here.',
    },
    {
        src: '/img/moon2.jpg',
        title: 'Image Title 2',
        description: 'Some content about image 2 goes here.',
    },
    {
        src: '/img/moon3.jpg',
        title: 'Image Title 3',
        description: 'Some content about image 3 goes here.',
    },

];

function Gallery() {
    const carouselRef = useRef(null);
    const [isScrolling, setIsScrolling] = useState(true);

    useEffect(() => {
        const carousel = carouselRef.current;
        let scrollAmount = 0;

        const slideCarousel = () => {
            if (isScrolling) {
                scrollAmount += 300; // Adjust based on item width
                if (scrollAmount >= carousel.scrollWidth) {
                    scrollAmount = 0; // Reset to the beginning
                }
                carousel.scrollTo({
                    top: 0,
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }
        };

        const intervalId = setInterval(slideCarousel, 3000); // Adjust interval as needed

        return () => clearInterval(intervalId);
    }, [isScrolling]);

    const handleMouseEnter = () => {
        setIsScrolling(false); // Pause auto-scroll when user interacts
    };

    const handleMouseLeave = () => {
        setIsScrolling(true); // Resume auto-scroll when user stops interacting
    };

    const scrollLeft = () => {
        const carousel = carouselRef.current;
        carousel.scrollBy({
            top: 0,
            left: -300, // Adjust to the width of each image or item
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        const carousel = carouselRef.current;
        carousel.scrollBy({
            top: 0,
            left: 300, // Adjust to the width of each image or item
            behavior: 'smooth',
        });
    };

    return (
        <div id='section2'>
            <h1>Gallery</h1>
            <div className='carousal-container'>
                <button className="scroll-button left" onClick={scrollLeft}>
                    &#8592; {/* Left arrow */}
                </button>
                <div
                    ref={carouselRef}
                    className="carousel"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onWheel={handleMouseEnter} // Pause on manual scroll
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-item">
                            <img src={image.src} alt={image.title} className="carousel-image" />
                            <div className="image-content">
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>
                    &#8594; {/* Right arrow */}
                </button>
            </div>
        </div>
    );
}

export default Gallery;


// import React, { useEffect, useRef, useState } from 'react';
// import './Gallery.css';
// import '../Section/Section.css';

// const images = [
//     {
//         // src: 'https://via.placeholder.com/300x200',
//         src: '/img/moon1r.png',
//         title: 'Image Title 1',
//         description: 'Some content about image 1 goes here.',
//     },
//     {
//         src: '/img/moon2r.png',
//         title: 'Image Title 2',
//         description: 'Some content about image 2 goes here.',
//     },
//     {
//         src: '/img/moon3r.png',
//         title: 'Image Title 3',
//         description: 'Some content about image 3 goes here.',
//     },

//     {
//         // src: 'https://via.placeholder.com/300x200',
//         src: '/img/moon1.jpg',
//         title: 'Image Title 1',
//         description: 'Some content about image 1 goes here.',
//     },
//     {
//         src: '/img/moon2.jpg',
//         title: 'Image Title 2',
//         description: 'Some content about image 2 goes here.',
//     },
//     {
//         src: '/img/moon3.jpg',
//         title: 'Image Title 3',
//         description: 'Some content about image 3 goes here.',
//     },
// ];

// function Gallery() {
//     const carouselRef = useRef(null);
//     const [isScrolling, setIsScrolling] = useState(true);

//     useEffect(() => {
//         const carousel = carouselRef.current;
//         let scrollAmount = 0;

//         const slideCarousel = () => {
//             if (isScrolling) {
//                 scrollAmount += 300; // Adjust based on item width
//                 if (scrollAmount >= carousel.scrollWidth) {
//                     scrollAmount = 0; // Reset to the beginning
//                 }
//                 carousel.scrollTo({
//                     top: 0,
//                     left: scrollAmount,
//                     behavior: 'smooth',
//                 });
//             }
//         };

//         const intervalId = setInterval(slideCarousel, 3000); // Adjust interval as needed

//         return () => clearInterval(intervalId);
//     }, [isScrolling]);

//     const handleMouseEnter = () => {
//         setIsScrolling(false); // Pause auto-scroll when user interacts
//     };

//     const handleMouseLeave = () => {
//         setIsScrolling(true); // Resume auto-scroll when user stops interacting
//     };

//     const scrollLeft = () => {
//         const carousel = carouselRef.current;
//         carousel.scrollBy({
//             top: 0,
//             left: -300, // Adjust to the width of each image or item
//             behavior: 'smooth',
//         });
//     };

//     const scrollRight = () => {
//         const carousel = carouselRef.current;
//         carousel.scrollBy({
//             top: 0,
//             left: 300, // Adjust to the width of each image or item
//             behavior: 'smooth',
//         });
//     };

//     return (
//         <div id='section2'>
//             <h1>Gallery</h1>
//             <div className="carousel-container" >
//                 <button className="scroll-button left" onClick={scrollLeft}>
//                     &#8592; {/* Left arrow */}
//                 </button>

//                 <div
//                     ref={carouselRef}
//                     className="carousel"
//                     onMouseEnter={handleMouseEnter}
//                     onMouseLeave={handleMouseLeave}
//                     onWheel={handleMouseEnter} // Pause on manual scroll
//                 >
//                     {images.map((image, index) => (
//                         <div key={index} className="carousel-item">
//                             <img src={image.src} alt={image.title} className="carousel-image" />
//                             <div className="image-content">
//                                 <h3>{image.title}</h3>
//                                 <p>{image.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <button className="scroll-button right" onClick={scrollRight}>
//                     &#8594; {/* Right arrow */}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Gallery;


