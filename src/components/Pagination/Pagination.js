import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

import './Pagination.scss';
import chevronLeft from '../../assets/icons/chevron_left.svg';
import chevronRight from '../../assets/icons/chevron_right.svg';
import firstPage from '../../assets/icons/first_page.svg';
import lastPage from '../../assets/icons/last_page.svg';

const Pagination = props => {

    const history = useHistory();

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(props.page || 1);
    }, [props.page]);


    return (
        <div className="pagination">
            {
                currentPage !== 1 ?
                    <React.Fragment>
                        <button className="pagination__button"
                                onClick={() => history.push('/page/1')}
                        >
                            <img src={firstPage} alt="first page"/>
                        </button>

                        <button className="pagination__button"
                                onClick={() => history.push('/page/' + (currentPage - 1))}
                        >
                            <img src={chevronLeft} alt="previous page"/>
                        </button>
                    </React.Fragment> : null
            }

            <span
                className="pagination__page-count">{currentPage.toString().padStart(2, '0')} / {props.count.toString().padStart(2, '0')}</span>

            {
                currentPage !== props.count ?
                    <React.Fragment>
                        <button className="pagination__button"
                                onClick={() => history.push('/page/' + (currentPage + 1))}
                        >
                            <img src={chevronRight} alt="next page"/>
                        </button>

                        <button className="pagination__button"
                                onClick={() => history.push('/page/' + props.count)}
                        >
                            <img src={lastPage} alt="last page"/>
                        </button>
                    </React.Fragment> : null
            }

        </div>
    );
};

Pagination.propTypes = {
    count: PropTypes.number,
    page: PropTypes.number
};

export default Pagination;