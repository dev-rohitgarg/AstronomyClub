import React from 'react';

// Function to dynamically import all images from a directory
function importAllImages(r) {
    return r.keys().map(r);
}

// Use require.context to grab all images from the '/img/ran/' directory
const imageArray = importAllImages(require.context('./img/ran', false, /\.(png|jpe?g|webp)$/));

const ImageGallery = () => {
    return (
        <div>
            {imageArray.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`image-${index}`} />
            ))}
        </div>
    );
};

export default ImageGallery;
