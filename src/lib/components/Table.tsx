import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { setHeaderTable, setBodyTable, setInitialBodyTable, getData } from '../features/tableSlice';
import Search from './Search';
import Tri from './Tri';
import Header from '../modelisations/Header';
import Pagination from './Pagination';
import PaginationEntries from './PaginationEntries';
import PaginationButtons from './PaginationButtons';
import TableEntries from './TableEntries';
import { styled } from 'styled-components';

interface TableProps {
    enableSearch?: boolean;
    enablePagination?: boolean;
    apiData: string | null;
    data: Array<any> | null;
    border?: string|null;
    color?: string|null;
    header: Header[];
}

interface Payload {
    [key: string]: any;
}

const TableHtml = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    color: ${(props) => props.theme.colors.color};
`;
const Tbody = styled.tbody`
    tr:nth-child(even) {
        background-color: ${(props) => props.theme.colors.colorTh};
    }

    tr {
        background-color: ${(props) => props.theme.colors.colorTr};
    }
`;

const Td = styled.td`
    border: 1px solid ${(props) => props.theme.colors.colorTh};
    text-align: left;
    padding: 8px;
`;

const Table: React.FC<TableProps> = ({ data = null, apiData = null, header, enableSearch = false, enablePagination = false, border=null, color=null }) => {

    const dispatch = useAppDispatch();

    const { body } = useAppSelector((state) => state.table);

    useEffect(() => {
        if (data === null && apiData !== null) {
            if (typeof apiData === 'string') {
                dispatch(getData(apiData));
            }
        } else if (data !== null && apiData === null) {
            dispatch(setInitialBodyTable(data));
            dispatch(setBodyTable(data));
        } else {
            console.error('data and apiData are null.');
        }
        dispatch(setHeaderTable(header));
    }, [data, apiData, header, dispatch]);

    return (
        <div className='dataTable'>
            <div className={'tableOptions'}>
                {enablePagination ? (
                    <PaginationEntries />
                ) : null}
                {enableSearch ? (
                    <Search />
                ) : null}
            </div>
            <TableHtml className="display table">
                <thead>
                    <Tri />
                </thead>
                <Tbody>
                    {enablePagination ? (
                        <Pagination />
                    ) : (body !== null ? (
                        body.length > 0 ? body.map((payload: Payload) => {
                            return <tr key={payload[0] + Math.random().toString(16).slice(2)}>
                                {header.length > 0 ? header.map((column: Header) => {
                                    return <Td key={payload[column.id] + Math.random().toString(16).slice(2)}>{column.type.toLowerCase() === 'date' ? payload[column.id].toLocaleDateString() : payload[column.id].toString()}</Td>;
                                }) : null}
                            </tr>
                        }) : null
                    ) : null)}
                </Tbody>
            </TableHtml>
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