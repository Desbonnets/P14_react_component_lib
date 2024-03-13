import React, { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setHeaderTable, setBodyTable, setInitialBodyTable } from '../features/tableSlice';
import Search from './Search';

interface TableProps {
    enableSearch?: boolean;
    data: Array<any> | null;
    header: Array<{ id: string; label: string; type: string }>;
}

interface Payload {
    [key: string]: any;
}

const Table: React.FC<TableProps> = ({ data, header, enableSearch = false }) => {
    const [tbodyData, setTbodyData] = useState<Array<any> | null>(null);

    const dispatch = useDispatch();

    const { body } = useSelector((state: RootState) => state.table);

    useEffect(() => {
        dispatch(setInitialBodyTable(data));
        dispatch(setHeaderTable(header));
    }, [data, header, dispatch]);

    // dispatch(setBodyTable(data));


    return (
        <div>
            {enableSearch ? (
                <Search />
            ) : null}
            <table className="display">
                <thead>
                    <tr className={'header'}>
                        {header.length > 0
                            ? header.map((payload) => {
                                return <th key={payload.id + Math.random().toString(16).slice(2)}>{payload.label}</th>
                            })
                            : null}
                    </tr>
                </thead>
                <tbody>
                    {body !== null ? (
                        body.length > 0 ? body.map((payload: Payload) => {
                            return <tr key={payload[0] + Math.random().toString(16).slice(2)}>
                                {header.length > 0 ? header.map((column: { id: string; label: string; type: string }) => {
                                    return <td key={payload[column.id] + Math.random().toString(16).slice(2)}>{payload[column.id]}</td>;
                                }) : null}
                            </tr>
                        }) : null
                    ) : null}
                </tbody>
            </table>
        </div>
    )
};

export default Table;