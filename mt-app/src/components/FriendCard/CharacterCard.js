
//sets up the reusable FriendCard component
import React from "react";
import "./CharacterCard.css";

//pass the image into each card so all 12 are rendered
const CharacterCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
            <img alt={props.image.replace(".png", "")} src={require("../../images/" + props.image)} />
        </div>
    </div>
);

export default CharacterCard;