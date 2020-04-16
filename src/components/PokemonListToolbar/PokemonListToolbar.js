import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useParams} from "react-router-dom";
import './PokemonListToolbar.scss';
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import Pagination from "../Pagination/Pagination";
import TypeFilterDialog from "../TypeFilterDialog/TypeFilterDialog";
import clsx from "clsx";

const Spacer = () => <div style={{flexGrow: 1}}/>

const PokemonListToolbar = props => {

    const {page} = useParams();

    const [filtersOpen, setFiltersOpen] = useState(false);
    const [filtersActive, setFiltersActive] = useState(false);

    return (
        <div className="toolbar">
            {
                props.showPagination ? <Pagination count={props.pageCount} page={Number.parseInt(page)}/> : null
            }

            <Spacer/>
            <PokemonSearch onChange={name => props.onName(name)}/>
            <button
                className={clsx("toolbar__filter-button", {"toolbar__filter-button--active": filtersActive})}
                onClick={() => setFiltersOpen(true)}>
                Filter
            </button>
            <TypeFilterDialog
                open={filtersOpen}
                onClose={() => setFiltersOpen(false)}
                onFilter={filters => {
                    props.onFilter(filters);
                    setFiltersActive(!!filters.length)
                }}
            />
        </div>
    );
};

PokemonListToolbar.propTypes = {
    pageCount: PropTypes.number.isRequired,
    showPagination: PropTypes.bool,
    page: PropTypes.number,
    onName: PropTypes.func,
    onFilter: PropTypes.func
};

export default PokemonListToolbar;