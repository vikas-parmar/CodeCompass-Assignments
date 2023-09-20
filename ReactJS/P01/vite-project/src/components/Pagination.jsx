import React, { useState } from 'react';

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate, setItemsPerPage, indexOfFirstItem, indexOfLastItem }) => {
    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Generate an array of page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    // Handle page click
    const handlePageClick = (pageNumber) => {
        paginate(pageNumber);
    };

    return (
        <footer>
            <div className='pagination-row-per-page'>
                <p>Rows Per Page: </p>
                <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                </select>
            </div>

            <div>
                {`${indexOfFirstItem + 1} - ${indexOfLastItem} of ${totalItems}`}
            </div>

            <div className="paginate-button">
                <button
                    onClick={() => {
                        if (currentPage > 1) {
                            paginate(currentPage - 1);
                        }
                    }}
                >
                    {"<"}
                </button>

                <button
                    onClick={() => {
                        if (currentPage < totalPages) {
                            paginate(currentPage + 1);
                        }
                    }}
                >
                    {">"}
                </button>
            </div>
        </footer>
    );
};

export default Pagination;