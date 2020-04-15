import React from 'react';
import {useHistory} from 'react-router-dom';
import './PokemonListEntry.scss';
import PropTypes from 'prop-types';
import PokemonType from "../PokemonType/PokemonType";

const PokemonListEntry = props => {

    const history = useHistory();

    return (
        <div className="pokemon-list-entry" onClick={() => history.push('/pokemon/' + props.pokemon.name)}>
            <div>
                <div>
                    <span className="pokemon-list-entry__id">#{props.pokemon.id.toString().padStart(3, '0')}</span>
                    <h2 className="pokemon-list-entry__name">{props.pokemon.name}</h2>
                </div>
                {
                    props.pokemon.types.map(type => <PokemonType type={type.type.name} key={type.type.name}/>)
                }
            </div>
            <div className="pokemon-list-entry__image-wrapper">
                <img className="pokemon-list-entry__image" src={props.pokemon.sprites.front_default}
                     alt={props.pokemon.name}/>
            </div>
        </div>
    );
};

PokemonListEntry.propTypes = {
    pokemon: PropTypes.object.isRequired
};

export default PokemonListEntry;