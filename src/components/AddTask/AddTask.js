import React from 'react';
import './AddTask.css';

import Header from "../Header/Header";


function AddTask(props) {

    return (
        <section className="add-task">
            <div className="date">
                <p className="date__text">Сегодня</p>
                <p className="date__number">19.10.2021</p>
            </div>
            <button className="add-task__button" type="button"></button>
        </section>

    );
}

export default AddTask;