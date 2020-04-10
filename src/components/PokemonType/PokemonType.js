import React from 'react';
import PropTypes from 'prop-types';
import './PokemonType.scss';

//TODO add the rest
const types = {
    water: '#6890F0',
    poison: '#A040A0',
    grass: '#78C850',
    fire: '#F08030',
    flying: '#A890F0',
    bug: '#A8B820',
    normal: '#A8A878'
};

const PokemonType = props => {

    const color = types[props.type];

    return (
        <div className="pokemon-type" style={{color, borderColor: color}}>
            {props.type}
        </div>
    );
};

PokemonType.propTypes = {
    type: PropTypes.string
};

export default PokemonType;