import React from "react";

const NavBar = (props) => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Pup Click</h1>
            <p className="lead">Click a puppy to start. Don't click the same puppy twice.</p>
            <h3><b>Score: {props.score} | Top Score: {props.highscore}</b></h3>
        </div>
    </div>
)

export default NavBar;

