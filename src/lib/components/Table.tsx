import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setHeaderTable, setBodyTable, setInitialBodyTable } from '../features/tableSlice';
import Search from './Search';
import Tri from './Tri';
import Header from '../modelisations/Header';
import Pagination from './Pagination';
import PaginationEntries from './PaginationEntries';
import PaginationButtons from './PaginationButtons';
import TableEntries from './TableEntries';

interface TableProps {
    enableSearch?: boolean;
    enablePagination?: boolean;
    data: Array<any> | null;
    header: Header[];
}

interface Payload {
    [key: string]: any;
}

const Table: React.FC<TableProps> = ({ data, header, enableSearch = false, enablePagination = false }) => {

    const dispatch = useDispatch();

    const { body } = useSelector((state: RootState) => state.table);

    useEffect(() => {
        dispatch(setInitialBodyTable(data));
        dispatch(setBodyTable(data));
        dispatch(setHeaderTable(header));
    }, [data, header, dispatch]);

    return (
        <div>
            <div className={'tableOptions'}>
                {enablePagination ? (
                    <PaginationEntries />
                ) : null}
                {enableSearch ? (
                    <Search />
                ) : null}
            </div>
            <table className="display">
                <thead>
                    <Tri />
                </thead>
                <tbody>
                    {enablePagination ? (
                        <Pagination />
                    ) : (body !== null ? (
                        body.length > 0 ? body.map((payload: Payload) => {
                            return <tr key={payload[0] + Math.random().toString(16).slice(2)}>
                                {header.length > 0 ? header.map((column: Header) => {
                                    return <td key={payload[column.id] + Math.random().toString(16).slice(2)}>{column.type.toLowerCase() === 'date' ? payload[column.id].toLocaleDateString() : payload[column.id].toString()}</td>;
                                }) : null}
                            </tr>
                        }) : null
                    ) : null)}
                </tbody>
            </table>
            <div className={'tableOptions'}>
                <TableEntries />
                {enablePagination ? (
                    <PaginationButtons />
                ) : null}
            </div>
        </div>
    )
};

export default Table;