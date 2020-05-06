import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import './App.css';
import Pokeframe from './Pokeframe/pokeframe.js';
import DetailedView from './DetailedView/detailedView.js';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route path="/" exact component={Pokeframe}/>
        <Route path="/pokedex-react" exact component={Pokeframe}/>
        <Route path="/pokedex-react/:pokemonId" exact component={DetailedView}/>  
      </div>
    </HashRouter>
  );
}

export default App;