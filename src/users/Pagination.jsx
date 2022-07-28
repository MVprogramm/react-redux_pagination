import React from 'react';
import './pagination.scss';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
}) => {
  const startPage = 0;
  const endPage = Math.ceil(totalItems / 3);

  let isPrevPageAvailable;
  currentPage === startPage
    ? isPrevPageAvailable = false
    : isPrevPageAvailable = true;
 

  let isNextPageAvailable;
  currentPage === endPage
    ? isNextPageAvailable = false
    : isNextPageAvailable = true;

  return (
    <div className="pagination">
      <button 
        className="btn"
        onClick={goPrev}
        disabled={!isPrevPageAvailable}
      >
        { isPrevPageAvailable && '←' }
      </button>
      <span className="pagination__page">{ currentPage + 1 }</span>
      <button 
        className="btn"
        onClick={() => goNext(totalItems)}
        disabled={!isNextPageAvailable}
      >
        { isNextPageAvailable && '→' }
      </button>
  </div>
  )
};

export default Pagination;