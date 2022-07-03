import React from 'react';
import './Card.css';



function Card(props) {

    return (
        <li className="card">
            <p className="card__text">{props.text}</p>
            <div className="card__buttons">
                <button className="card__edit" type="button"></button>
                <button className="card__delete" type="button"></button>
            </div>
        </li>
    );
}

export default Card

















