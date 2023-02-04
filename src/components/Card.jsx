import React from "react";
import './card.css';

const Card = (props) => {
    return (
        <>
            <div className='center_div'>
                <br />
                <h3 className='cardheader'>flight details:</h3>
                <br />
                <h4>from: {props.from}</h4>
                <h4>to: {props.to}</h4>
                <h4>departure: {props.dep}</h4>
                <h4>arrival: {props.arrival}</h4>
                <h4>type of flight: {props.type}</h4>
            </div>
        </>
    )
}

export default Card;