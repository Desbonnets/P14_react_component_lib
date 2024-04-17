import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from '../modelisations/Header';

interface PaginationProps { }

const Pagination: React.FC<PaginationProps> = () => {

    const { header, displayItem, loading, error, body } = useSelector((state: RootState) => state.table);

    return (
        <>
            {loading ? <tr><td colSpan={header.length} key={Math.random().toString(16).slice(2)} style={{ textAlign: "center" }}>Loading...</td></tr> :
                error || body.error !== undefined ? <tr><td colSpan={header.length} key={Math.random().toString(16).slice(2)} style={{ textAlign: "center" }}>Error API</td></tr> :
                    displayItem.length > 0 ? displayItem.map((item: any, index: number) => (
                        <tr key={index}>
                            {header.length > 0 ? header.map((column: Header) => {
                                return <td key={item[column.id] + Math.random().toString(16).slice(2)}>{column.type.toLowerCase() === 'date' ? new Date(item[column.id]).toLocaleDateString() : item[column.id].toString()}</td>;
                            }) : null}
                        </tr>
                    )) : <tr><td colSpan={header.length} key={Math.random().toString(16).slice(2)}>no data found</td></tr>
            }
        </>
    );
};

export default Pagination;
