import React, {useEffect, useState} from 'react';
import './PokemonList.scss';

import {fetchPokemonList} from "../../services/pokemonService";
import PokemonCard from "../PokemonCard/PokemonCard";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        try {
            fetchPokemonList(20, 0).then(data => setPokemons(data))
        } catch (e) {
            //TODO proper error handling
            console.error(e);
        }
    }, []);

    return (
        <div className="pokemon-list">
            {pokemons.map(p =>
                <div className="pokemon-list__pokemon-wrapper">
                    <PokemonCard pokemon={p} key={p.id}/>
                </div>
            )}
        </div>
    );
};

export default PokemonList;