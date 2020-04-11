import React from 'react';
import PropTypes from 'prop-types';
import './PokemonSearch.scss';

const PokemonSearch = props => {
    return (
        <div className="pokemon-search">
            <input
                className="pokemon-search__input"
                placeholder="Name..."
                type="text"
                onChange={e => props.onChange(e.target.value.toLowerCase())}
            />
        </div>
    );
};

PokemonSearch.propTypes = {
    onChange: PropTypes.func
};

export default PokemonSearch;