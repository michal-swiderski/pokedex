import React from 'react';
import PropTypes from 'prop-types';
import './PokemonType.scss';
import clsx from "clsx";

const PokemonType = props => {

    return (
        <div
            className={clsx("pokemon-type pokemon-type--" + props.type, {"pokemon-type--full-width": props.fullWidth})}>
            {props.type}
        </div>
    );
};

PokemonType.propTypes = {
    type: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool
};

export default PokemonType;