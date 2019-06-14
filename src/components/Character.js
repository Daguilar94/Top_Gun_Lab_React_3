import React from 'react';

const Character = ({ imgSrc, name }) => {
    return (
        <figure>
            <img src={imgSrc} alt=""/>
            <figcaption>{name}</figcaption>    
        </figure>
    );
}
 
export default Character;