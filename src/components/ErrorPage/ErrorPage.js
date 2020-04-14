import React from 'react';
import './ErrorPage.scss';

import pikapika from '../../assets/pikapika.png';
import {Link} from "react-router-dom";

const ErrorPage = props => {
    return (
        <div className="not-found-page">
            <img className="not-found-page__image" src={pikapika} alt="pikachu"/>
            <p className="not-found-page__description">{props.msg}</p>
            <Link className="not-found-page__link" to='/page/1'>Go back to page 1</Link>
        </div>
    );
};

export default ErrorPage;