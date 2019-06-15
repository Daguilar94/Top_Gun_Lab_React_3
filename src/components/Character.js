import React from 'react';
import styled from 'styled-components';

const StyledCharacterFigure = styled.figure`
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
    margin: 0;
`;

const StyledCharacterImg = styled.img`
    width: 200px;
    height: 200px;
    vertical-align: middle;
`;
const StyledCharacterCaption = styled.figcaption`
    background-color: #222;
    text-decoration: none;
    color: #fff;
    padding: 3px;
`;

const Character = ({ imgSrc, name }) => {
    return (
        <StyledCharacterFigure>
            <StyledCharacterImg src={imgSrc} alt=""/>
            <StyledCharacterCaption>{name}</StyledCharacterCaption>    
        </StyledCharacterFigure>
    );
}
 
export default Character;