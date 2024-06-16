import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setItemNumber } from '../features/tableSlice';

interface PaginationEntriesProps {}

const PaginationEntries: React.FC<PaginationEntriesProps> = () => {

    const dispatch = useDispatch();
    const { itemNumber } = useSelector((state: RootState) => state.table);

    function handleItemsPerPageChange(event: React.ChangeEvent<HTMLSelectElement>) {
        dispatch(setItemNumber(parseInt(event.target.value)));
    }

    return (
        <div>
            <label htmlFor="selectItems">Show </label>
            <select id="selectItems" value={itemNumber} onChange={handleItemsPerPageChange}>
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
            </select>
            entries
        </div>
    );
};

export default PaginationEntries;
