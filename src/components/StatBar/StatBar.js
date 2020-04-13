import React from 'react';
import PropTypes from 'prop-types';
import './StatBar.scss';

const StatBar = props => {
    return (
        <>
            <span className="ability-bar__name">
                {props.statName}:
                <span className="ability-bar__stat"> {props.stat}</span>
            </span>
            <div className="ability-bar">
                <div className="ability-bar__bar" style={{width: props.stat / 255 * 100 + '%'}}/>
            </div>
        </>
    );
};

StatBar.propTypes = {
    stat: PropTypes.number.isRequired,
    statName: PropTypes.string.isRequired,
    color: PropTypes.string
};

export default StatBar;