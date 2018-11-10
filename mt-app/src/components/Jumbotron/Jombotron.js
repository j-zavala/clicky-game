//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <header className="header">
        <h1>Bojack Character Clicky Game!</h1>
        <h2>Click on a character to earn points, but don't click on any character more than once!</h2>
    </header>
);
export default Jumbotron;