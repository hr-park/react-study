import React from 'react';
import GalleryItem from './GalleryItem'

const GalleryList = ({gallerys, onGallery, catidx}) => {
    const {image , title } = catidx
    
    return (
        <article>
                <img src={image} alt={title} />
                <ul>
                    {
                        gallerys.map( gallery => <GalleryItem key={gallery.id} gallery={gallery} onGallery={onGallery} />)
                    }                  
                </ul>
        </article>
    );
};

export default GalleryList;