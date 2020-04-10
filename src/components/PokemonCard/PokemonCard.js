import React from 'react';
import PropTypes from 'prop-types';
import './PokemonCard.scss';
import PokemonType from "../PokemonType/PokemonType";

const PokemonCard = (props) => {

    return (
        <div className="pokemon-card">
            <img className="pokemon-card__sprite" src={props.pokemon.sprites.front_default} alt={props.pokemon.name}/>
            <span className="pokemon-card__id">
                    #{props.pokemon.id.toString().padStart(3, '0')}
            </span>
            <h2 className="pokemon-card__name">
                {props.pokemon.name}
            </h2>
            <div className="pokemon-card__types">
                {
                    props.pokemon.types.map(type => <PokemonType type={type.type.name}/>)
                }
            </div>
        </div>
    );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.object
}

export default PokemonCard;