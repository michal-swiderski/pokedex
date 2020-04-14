import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import ErrorPage from "../ErrorPage/ErrorPage";

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
                    <Route path="/error">
                        <ErrorPage msg="A fatal error has occured."/>
                    </Route>
                    <Route path="/404">
                        <ErrorPage msg="Page not found."/>
                    </Route>
                    <Redirect to="/404"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
