import React from 'react';

import './App.css';

import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';

import {cardsData} from "../../utils/cards.js";

function App() {

  const [cards, setCards] = React.useState(cardsData);



  return (
      <div className="App">
        <div className="page">
          <div className="page__container">
            <Header/>

              <Main
                  cards={cards}
              />

            <Footer/>
          </div>
        </div>
      </div>
  );
}

export default App;
