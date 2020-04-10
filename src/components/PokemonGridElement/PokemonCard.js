import React from 'react';
import PropTypes from 'prop-types';
import './PokemonCard.scss';

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
        </div>
    );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.object
}

export default PokemonCard;