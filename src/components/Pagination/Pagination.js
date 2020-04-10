import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {range} from 'lodash';
import clsx from 'clsx';

import './Pagination.scss';

const Pagination = props => {

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(props.page);
    }, [props.page])

    return (
        <ul className="pagination">
            <li
                className={clsx("pagination__item", {"pagination__item--active": currentPage === 1})}
                onClick={() => {
                    setCurrentPage(1);
                    props.onChange(1);
                }}
            >
                1
            </li>
            {
                currentPage > 4 ? <span className="pagination__dots">...</span> : null
            }
            {range(currentPage > 4 ? currentPage - 2 : 1, currentPage > 4 ? currentPage + 2 : 5).map(num => {
                return <li
                    className={clsx("pagination__item", {"pagination__item--active": currentPage === num + 1})}
                    onClick={() => {
                        setCurrentPage(num + 1);
                        props.onChange(num + 1);
                    }}
                    key={num}>{num + 1}
                </li>
            })}
        </ul>
    );
};

Pagination.propTypes = {
    count: PropTypes.number,
    page: PropTypes.number,
    onChange: PropTypes.func
};

export default Pagination;