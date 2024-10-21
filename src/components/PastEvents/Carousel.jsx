// // src/Carousel.jsx
// import React, { useState } from 'react';
// import './Carousel.css'; // Make sure to create this file for styling

// const Carousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const slides = [
//         'Slide 1',
//         'Slide 2',
//         'Slide 3',
//         'Slide 4',
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((currentIndex + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
//     };

//     return (
//         <div className="carousel-container-events">
//             <div className="carousel-wrapper-events" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//                 {slides.map((slide, index) => (
//                     <div key={index} className="carousel-slide-events">
//                         {slide}
//                     </div>
//                 ))}
//             </div>
//             <button className="prev-btn" onClick={prevSlide}>Previous</button>
//             <button className="next-btn" onClick={nextSlide}>Next</button>
//         </div>
//     );
// };

// export default Carousel;
// src/Carousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            text: 'Astronomy Club Explores the Night Sky with Prof. D Narasimha!',
            image: '/img/event1.jpg', // Replace with your image URL
        },
        {
            text: 'Slide 2 Text',
            image: '/img/event2.jpg',
        },
        {
            text: 'Slide 3 Text',
            image: '/img/event1.jpg',
        },
        {
            text: 'Slide 4 Text',
            image: '/img/event2.jpg',
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };

    // Automatically change slide every 3 seconds unless interrupted manually
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 3000); // 3 seconds for each slide

        return () => clearInterval(slideInterval); // Cleanup the interval on unmount or update
    }, [currentIndex]); // Reset the interval on index change

    return (
        <div className="carousel-container-events">
            <button className="prev-btn" onClick={prevSlide}>&#8592;</button>
            <div className="carousel-wrapper-events" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-slide-events">
                        <div className="slide-content-events">
                            <div className="slide-text-events">{slide.text}</div>
                            <div className="slide-image-events">
                                <img src={slide.image} alt={`Slide ${index + 1}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="next-btn" onClick={nextSlide}>&#8594;</button>
        </div>
    );
};

export default Carousel;
