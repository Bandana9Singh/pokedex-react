import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Pokeframe from './Pokeframe/pokeframe.js';
import DetailedView from './DetailedView/detailedView.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Pokeframe}/>
        <Route path="/pokedex-react" component={Pokeframe}/>
        <Route path="/:pokemonId" component={DetailedView}/>  
      </div>
    </BrowserRouter>
  );
}

export default App;