import React from 'react';
import PropTypes from 'prop-types';
import './PokemonSearch.scss';

const PokemonSearch = props => {
    return (
            <input
                className="pokemon-search"
                placeholder="Name..."
                type="text"
                onChange={e => props.onChange(e.target.value.toLowerCase())}
            />
    );
};

PokemonSearch.propTypes = {
    onChange: PropTypes.func
};

export default PokemonSearch;