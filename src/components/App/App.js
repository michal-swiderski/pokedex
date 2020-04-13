import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Redirect exact from='/' to='/1'/>
                    <Route exact path="/:page">
                        <div className="container">
                            <PokemonList/>
                        </div>
                    </Route>
                    <Route path="/pokemon/:name">
                        <PokemonDetails/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
