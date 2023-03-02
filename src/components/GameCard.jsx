import React from "react";
import "./GameCard.css"

const GameCard = (props) => {
    return (
        <div className="card">
            <p className="team">{props.team}</p>
            <p className="date">{props.date}</p>
            <p className="time">{props.time}</p>
        </div>
    )
}

export default GameCard;