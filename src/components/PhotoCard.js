import React from 'react';


const PhotoCard = props => {
    const src = props.source;


    return (
        <img src={src} className="photo-card" />
    )
}

export default PhotoCard;
