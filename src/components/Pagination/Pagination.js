import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {range} from 'lodash';
import clsx from 'clsx';

import './Pagination.scss';

const Pagination = props => {

    const history = useHistory();

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(props.page || 1);
    }, [props.page]);

    let start = currentPage > 2 ? (currentPage >= props.count - 1 ? currentPage - 2 : currentPage - 1) : 2;
    let end = currentPage > 2 ? (currentPage >= props.count - 1 ? props.count : currentPage + 2) : 4;

    return (
        <ul className="pagination">
            <li
                className={clsx('pagination__item', {'pagination__item--active': currentPage === 1})}
                onClick={() => history.push('/1')}
            >
                1
            </li>
            {
                range(start, end).map(p =>
                    <li
                        className={clsx('pagination__item', {'pagination__item--active': currentPage === p})}
                        onClick={() => history.push('/' + p)}
                    >
                        {p}
                    </li>)
            }
            <li
                className={clsx('pagination__item', {'pagination__item--active': currentPage === props.count})}
                onClick={() => history.push('/' + props.count)}
            >
                {props.count}
            </li>
        </ul>
    );
};

Pagination.propTypes = {
    count: PropTypes.number,
    page: PropTypes.number
};

export default Pagination;