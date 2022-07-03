import React from 'react';
import './Main.css';

import AddTask from "../AddTask/AddTask";
import CardList from '../CardList/CardList.js';

function Main(props) {

    return (
        <main className="content">
            <AddTask/>
            <CardList cards={props.cards}/>
        </main>
    );
}

export default Main;