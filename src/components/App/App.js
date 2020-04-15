import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import Header from "../Header/Header";
import PokemonList from "../PokemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Footer from "../Footer/Footer";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header/>
                <div className="content-wrapper">
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
                            <ErrorPage msg="A fatal error has occurred."/>
                        </Route>
                        <Route path="/404">
                            <ErrorPage msg="Page not found."/>
                        </Route>
                        <Redirect to="/404"/>
                    </Switch>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
