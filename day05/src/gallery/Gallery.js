import React, { useState } from 'react';
import './style.css'
import data from '../assets/api/gallery'
import GalleryList from './GalleryList'
import GalleryView from './GalleryView'

const Gallery = () => {
    const [ gallerys , setGallerys ] = useState( data )
    const [catidx , setCatidx] = useState( gallerys[0] )

    const onGallery = (id) => {
      //alert( id )
    //   setCatidx( gallerys[ id -1 ])
    //const newIdx = gallerys.find( item => item.id === id )
    //setCatidx( newIdx )
    const newIdx = gallerys.findIndex( item => item.id ===id )
    setCatidx( gallerys[ newIdx ])
    }

    return (
        <div className="con-box">
            <GalleryList  gallerys={gallerys} onGallery={onGallery} catidx={catidx} />
            <GalleryView catidx={catidx} />
        </div>
    );
};

export default Gallery;