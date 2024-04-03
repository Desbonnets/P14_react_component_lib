import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Header from '../modelisations/Header';

interface PaginationProps { }

const Pagination: React.FC<PaginationProps> = () => {

    const { header, displayItem } = useSelector((state: RootState) => state.table);

    return (
        <>
            {displayItem.map((item: any, index: number) => (
                <tr key={index}>
                    {header.length > 0 ? header.map((column: Header) => {
                        return <td key={item[column.id] + Math.random().toString(16).slice(2)}>{column.type.toLowerCase() === 'date' ? item[column.id].toLocaleDateString() : item[column.id].toString()}</td>;
                    }) : null}
                </tr>
            ))}
        </>
    );
};

export default Pagination;
