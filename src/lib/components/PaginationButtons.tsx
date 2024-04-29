import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setDisplayItem, setPageNumber } from '../features/tableSlice';

interface PaginationButtonsProps { }

const PaginationButtons: React.FC<PaginationButtonsProps> = () => {

    const dispatch = useDispatch()
    const { body, itemNumber, error } = useSelector((state: RootState) => state.table);
    const [currentPage, setCurrentPage] = useState<number>(1);

    function displayItems(pageNumber: number) {
        if (error === null && body.error === undefined) {
            const startIndex = (pageNumber - 1) * itemNumber;
            const endIndex = startIndex + itemNumber;
            dispatch(setDisplayItem(body.slice(startIndex, endIndex)));
            dispatch(setPageNumber(pageNumber));
            setCurrentPage(pageNumber);
        }
    }

    useEffect(() => {
        displayItems(1);
    }, [itemNumber, body]);

    function createPaginationButtons() {
        const pageCount = Math.ceil(body.length / itemNumber);

        return (
            <div id="pagination-buttons" className={'pagination'}>
                <button disabled={currentPage === 1 ? true : false} key={'first_page'} onClick={() => displayItems(1)}>First page</button>
                <button disabled={currentPage === 1 ? true : false} key={'prev_page'} onClick={() => displayItems(currentPage - 1)}>Previous page</button>
                {Array.from({ length: pageCount }).map((_, index) => (
                    <button className={currentPage === (index + 1) ? 'currentPage' : ''} key={index} onClick={() => displayItems(index + 1)}>
                        {index + 1}
                    </button>
                ))}
                <button disabled={currentPage === pageCount ? true : false} key={'next_page'} onClick={() => displayItems(currentPage + 1)}>Next page</button>
                <button disabled={currentPage === pageCount ? true : false} key={'last_page'} onClick={() => displayItems(pageCount)}>Last page</button>
            </div>
        );
    }

    return (
        <>
            {createPaginationButtons()}
        </>
    );
};

export default PaginationButtons;
