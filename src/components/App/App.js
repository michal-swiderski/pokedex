import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Switch>
                    <Redirect exact from='/' to='/page/1'/>
                    <Route exact path="/page/:page">
                        <div className="container">
                            <PokemonList/>
                        </div>
                    </Route>
                    <Route path="/pokemon/:name">
                        <PokemonDetails/>
                    </Route>
                    <Route path="/404">
                        <NotFoundPage/>
                    </Route>
                    <NotFoundPage/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
