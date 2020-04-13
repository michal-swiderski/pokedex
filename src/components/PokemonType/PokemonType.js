import React from 'react';
import PropTypes from 'prop-types';
import './PokemonType.scss';

const PokemonType = props => {

    return (
        <div
            className={"pokemon-type pokemon-type--" + props.type}>
            {props.type}
        </div>
    );
};

PokemonType.propTypes = {
    type: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool
};

export default PokemonType;