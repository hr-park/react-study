import React from 'react';

const GalleryItem = ({gallery, onGallery}) => {
    const {id, image , title } = gallery
    return (
        <li onClick={() => onGallery(id)}>
            <img src={image} alt={title} />
        </li>
    );
};

export default GalleryItem;