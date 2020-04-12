import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './PokemonListToolbar.scss';
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import Pagination from "../Pagination/Pagination";
import {useParams} from "react-router-dom";
import TypeFilterDialog from "../TypeFilterDialog/TypeFilterDialog";

const Spacer = () => <div style={{flexGrow: 1}}/>

const PokemonListToolbar = props => {

    const {page} = useParams();

    const [filtersOpen, setFiltersOpen] = useState(false);

    return (
        <div className="toolbar">
            <Pagination count={props.pageCount} page={Number.parseInt(page)}/>
            <Spacer/>
            <PokemonSearch onChange={name => props.onName(name)}/>
            <button onClick={() => setFiltersOpen(true)}>Filter</button>
            <TypeFilterDialog open={filtersOpen} onClose={() => setFiltersOpen(false)} onFilter={props.onFilter}/>
        </div>
    );
};

PokemonListToolbar.propTypes = {
    pageCount: PropTypes.number.isRequired,
    page: PropTypes.number,
    onName: PropTypes.func,
    onFilter: PropTypes.func
};

export default PokemonListToolbar;