import React from 'react';
import './CardList.css';

import Card from "../Card/Card.js";


function CardList(props) {



    return (
        <section className="events">
            <ul className="cards">
                {props.cards.map((card) => (<Card card={card}
                                                  text={card.text}
                                                  key={card.id}
                                                  />)
                )}
            </ul>
        </section>
    );
}

export default CardList;