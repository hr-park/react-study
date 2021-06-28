import React from 'react';

const GalleryView = ({catidx}) => {
    const { title , des } = catidx
    return (
        <article>
            <h3>{title}</h3>
            <p>{des} </p>
        </article>
    );
};

export default GalleryView;