import React, {useEffect, useRef, useState} from 'react';
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
    const isFirstRun = useRef(true);

    const handleTypeClick = (type) => {
        if (activeTypes.includes(type)) {
            setActiveFilters(prev => without(prev, type));
        } else {
            setActiveFilters([...activeTypes, type]);
        }
    }

    useEffect(() => {
        if (props.open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [props.open]);

    useEffect(() => {

        //prevent the filter action from running the first time the component renders which would cause a redirect to the first page every time someone visits another page directly.

        if (isFirstRun.current) {
            isFirstRun.current = false;
        } else {
            props.onFilter(activeTypes);
        }
    }, [activeTypes]);

    const dialog = (
        <>
            <div className="filter-dialog">
                <h2>Filter by types</h2>
                <ul className="filter-dialog__type-list">
                    {
                        types.map(t =>
                            <li key={t}>
                                <button
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