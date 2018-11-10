//sets up the reusable Card component
import React from "react";
import "./card.css";

//pass the image into each card so all 12 are rendered
const Card = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace(".png", "")} src={require("../../images" + props.image)} />
        </div>
    </div>
);

export default Card;