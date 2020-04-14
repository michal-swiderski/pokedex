import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import './PokemonDetails.scss';
import {fetchPokemonByNameOrId, fetchPokemonSpeciesByName} from "../../services/pokemonService";
import PokemonType from "../PokemonType/PokemonType";
import StatBar from "../StatBar/StatBar";
import {sample} from 'lodash';

import arrow_back from '../../assets/icons/arrow_back.svg';
import arrow_forward from '../../assets/icons/arrow_forward.svg';


const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState(null);
    const [pokemonSpecies, setPokemonSpecies] = useState(null);
    const [flavorText, setFlavorText] = useState(null);

    const history = useHistory();
    const {name} = useParams();

    useEffect(() => {
        (async () => {
            try {
                const pokemon = await fetchPokemonByNameOrId(name);
                if (pokemon === null) {
                    history.push('/404');
                    return;
                }

                setPokemon(pokemon);
                const species = await fetchPokemonSpeciesByName(pokemon.species.name);
                setPokemonSpecies(species);
                const flavor_texts = species.flavor_text_entries.filter(el => el.language.name === 'en').map(el => el.flavor_text);
                setFlavorText(sample(flavor_texts));
            } catch (e) {
                //TODO error handling
            }
        })();

    }, [name, history]);

    if (pokemon === null || pokemonSpecies === null) {
        return null;
    }

    return (
        <div className="pokemon-details">
            <div className="pokemon-details__image-wrapper">
                <button className="pokemon-details__nav-button pokemon-details__nav-button--back"
                        onClick={() => history.push('/pokemon/' + (pokemon.id - 1))}>
                    <img src={arrow_back} alt="arrow left"/>
                    <span>#{(pokemon.id - 1).toString().padStart(3, '0')}</span>
                </button>

                <button className="pokemon-details__nav-button pokemon-details__nav-button--forward"
                        onClick={() => history.push('/pokemon/' + (pokemon.id + 1))}>
                    <span>#{(pokemon.id + 1).toString().padStart(3, '0')}</span>
                    <img src={arrow_forward} alt="arrow right"/>
                </button>

                <img className="pokemon-details__image" src={pokemon.sprites.front_default} alt={pokemon.name}/>
            </div>
            <h1 className="pokemon-details__name">{pokemon.name}</h1>
            <div className="pokemon-details__size-wrapper">
                <span className="pokemon-details__size">Weight: {pokemon.weight / 10} kg</span>
                <span className="pokemon-details__size">Height: {pokemon.height / 10} m</span>
            </div>
            <p className="pokemon-details__description">"{flavorText}"</p>
            <h2>Types</h2>
            {pokemon.types.map(({type}) => <PokemonType key={type.name} type={type.name} fullWidth/>)}
            <h2>Stats</h2>
            {
                pokemon.stats.map(stat => {
                    return (
                        <React.Fragment key={stat.stat.name}>
                            <StatBar stat={stat.base_stat} statName={stat.stat.name}/>
                        </React.Fragment>
                    )
                })
            }

        </div>
    );
};

export default PokemonDetails;