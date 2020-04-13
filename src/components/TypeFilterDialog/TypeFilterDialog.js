import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './TypeFilterDialog.scss';

import {without} from 'lodash';
import clsx from "clsx";

const types = ['normal', 'fighting', 'flying',
    'poison', 'ground', 'rock',
    'bug', 'ghost', 'steel',
    'fire', 'water', 'grass',
    'electric', 'psychic', 'ice',
    'dragon', 'dark', 'fairy'];

const TypeFilterDialog = props => {

    const [activeTypes, setActiveFilters] = useState([]);

    const handleTypeClick = (type) => {
        if (activeTypes.includes(type)) {
            setActiveFilters(prev => without(prev, type));
        } else {
            setActiveFilters([...activeTypes, type]);
        }
    }

    useEffect(() => {
        props.onFilter(activeTypes);
    }, [activeTypes]);

    const dialog = (
        <>
            <div className="filter-dialog">
                <h2>Filter by types</h2>
                <ul className="filter-dialog__type-list">
                    {
                        types.map(t =>
                            <li>
                                <button
                                    key={t}
                                    className={
                                        clsx('filter-dialog__type-list-button', {
                                            [`filter-dialog__type-list-button--${t}`]: !activeTypes.includes(t),
                                            [`filter-dialog__type-list-button--${t}-active`]: activeTypes.includes(t)
                                        })
                                    }
                                    onClick={() => handleTypeClick(t)}
                                >
                                    {t}
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="dialog-overlay" onClick={() => props.onClose()}/>
        </>
    )

    return props.open ? dialog : null;
};

TypeFilterDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onFilter: PropTypes.func
};

export default TypeFilterDialog;