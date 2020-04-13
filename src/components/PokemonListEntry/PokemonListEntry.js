import React from 'react';
import './PokemonListEntry.scss';
import PropTypes from 'prop-types';
import PokemonType from "../PokemonType/PokemonType";

const PokemonListEntry = props => {
    return (
        <div className="pokemon-list-entry">
            <div>
                <div>
                    <span className="pokemon-list-entry__id">#{props.pokemon.id.toString().padStart(3, '0')}</span>
                    <h2 className="pokemon-list-entry__name">{props.pokemon.name}</h2>
                </div>
                {
                    props.pokemon.types.map(type => <PokemonType type={type.type.name} fullWidth key={type.type.name}/>)
                }
            </div>
            <div className="pokemon-list-entry__image-wrapper">
                <img src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
            </div>
        </div>
    );
};

PokemonListEntry.propTypes = {
    pokemon: PropTypes.object.isRequired
};

export default PokemonListEntry;