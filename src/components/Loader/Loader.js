import React from 'react';
import './Loader.scss';

import joelton from '../../assets/joelton.gif';

const Loader = props => {
    return (
        <div className="loader">
            <img className="loader__image" src={joelton} alt="running joelton"/>
            <p className="loader__text">Loading...</p>
        </div>
    );
};

Loader.propTypes = {};

export default Loader;