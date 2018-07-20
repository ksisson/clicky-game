import React from "react";


const ImageCard = props => (
    
        <img alt="" src={props.src} onClick={() => props.imageClick(props.id)} /> 
    
)

export default ImageCard;