import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './PokemonDetails.scss';
import {fetchPokemonByName, fetchPokemonSpeciesByName} from "../../services/pokemonService";
import PokemonType from "../PokemonType/PokemonType";
import StatBar from "../StatBar/StatBar";

const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState(null);
    const [pokemonSpecies, setPokemonSpecies] = useState(null);

    const {name} = useParams();

    useEffect(() => {
        fetchPokemonByName(name).then(pokemon => {
            setPokemon(pokemon);
            return fetchPokemonSpeciesByName(pokemon.species.name);
        }).then(species => {
            setPokemonSpecies(species);
        }).catch(e => {
            //TODO proper error handling
        });

    }, [name]);

    if (pokemon === null || pokemonSpecies === null) {
        return null;
    }

    const desription = pokemonSpecies.flavor_text_entries.find(el => el.language.name === 'en').flavor_text;

    return (
        <div className="pokemon-details">
            <div className="pokemon-details__image-wrapper">
                <img className="pokemon-details__image" src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <h1 className="pokemon-details__name">{pokemon.name}</h1>
            <div className="pokemon-details__size-wrapper">
                <span className="pokemon-details__size">Weight: {pokemon.weight / 10} kg</span>
                <span className="pokemon-details__size">Height: {pokemon.height / 10} m</span>
            </div>
            <p className="pokemon-details__description">"{desription}"</p>
            <h2>Types</h2>
            {pokemon.types.map(({type}) => <PokemonType key={type.name} type={type.name}/>)}
            <h2>Stats</h2>
            {
                pokemon.stats.map(stat => {
                    return (
                        <React.Fragment>
                            <StatBar stat={stat.base_stat} statName={stat.stat.name}/>
                        </React.Fragment>
                    )
                })
            }

        </div>
    );
};

export default PokemonDetails;