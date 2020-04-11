import React from 'react';
import PropTypes from 'prop-types';
import './PokemonListToolbar.scss';
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import Pagination from "../Pagination/Pagination";
import {useHistory, useParams} from "react-router-dom";

const PokemonListToolbar = props => {

    const {page} = useParams();
    const history = useHistory();

    return (
        <div className="toolbar">
            <Pagination count={props.pageCount} page={page} onChange={(page) => {
                history.push('/' + page)
            }}/>

            <PokemonSearch onChange={name => props.onName(name)}/>
        </div>
    );
};

PokemonListToolbar.propTypes = {
    pageCount: PropTypes.number.isRequired,
    page: PropTypes.number,
    onName: PropTypes.func.isRequired
};

export default PokemonListToolbar;