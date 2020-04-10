import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/">
                        <div className="container">
                            <PokemonList/>
                        </div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
