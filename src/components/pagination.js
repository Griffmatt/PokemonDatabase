import React from 'react';

function Pagination({paginate}){
  let pageNumbers = [1, 2, 3, 4];

  const pages = pageNumbers.map(number => {return(
    <li key={number} className='page-item mt-3 mb-3'>
      <a onClick={() => paginate(number)} className='page-link'>
        {number}
      </a>
    </li>
  )})

  return (
    <nav>
      <ul className='pagination'>
        {pages}
      </ul>
    </nav>
  );
};

export default Pagination;

