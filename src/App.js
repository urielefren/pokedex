import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import  OptionsBar  from './components/OptionsBar';
import PokemonList from './components/PokemonList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokedex</h1>
        </header>
        <div className="container">
          <OptionsBar />
          <PokemonList />
        </div>
      </div>
    );
  }
}

export default App;
