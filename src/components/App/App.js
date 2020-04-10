import React from 'react';
import './App.css';

import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <PokemonList/>
            </div>
        </div>
    );
}

export default App;
