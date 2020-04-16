import React from 'react';
import './Loader.scss';

import jolteon from '../../assets/jolteon.gif';

const Loader = props => {
    return (
        <div className="loader">
            <img className="loader__image" src={jolteon} alt="running joelton"/>
            <p className="loader__text">Loading...</p>
        </div>
    );
};

Loader.propTypes = {};

export default Loader;