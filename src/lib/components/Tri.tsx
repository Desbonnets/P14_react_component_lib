import React, { MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setBodyTable } from '../features/tableSlice';
import Header from '../modelisations/Header';

interface TriProps { }

const Tri: React.FC<TriProps> = () => {
    const dispatch = useDispatch();
    const { header, initialBody } = useSelector((state: RootState) => state.table);
    const [sortOrder, setSortOrder] = useState<{ id: string; order: 'asc' | 'desc' } | null>(null);

    useEffect(() => {
        setSortOrder(null);
    }, [initialBody])

    const handleTri = (e: MouseEvent<HTMLTableHeaderCellElement>, id: string) => {
        const newOrder = sortOrder && sortOrder.id === id ? (sortOrder.order === 'asc' ? 'desc' : 'asc') : 'asc';
        e.currentTarget.className = e.currentTarget.className === 'sortable asc' ? 'sortable desc' : 'sortable asc';
        setSortOrder({ id, order: newOrder });

        const sortedBody = [...initialBody].sort((a, b) => {
            const currentHeader = header.find((element: Header) => element.id === id);
            if (currentHeader) {
                if (currentHeader.type.toLowerCase() === 'date') {
                    let x;
                    let y;
                    if(a[id] instanceof Date && b[id] instanceof Date){
                        x = a[id].getTime();
                        y = b[id].getTime();
                    }else{
                        x = new Date(a[id]).getTime();
                        y = new Date(b[id]).getTime();
                    }
                    if (newOrder === 'asc') {
                        return x - y;
                    } else {
                        return y - x;
                    }
                } else {
                    const x = a[id].toString().toLowerCase();
                    const y = b[id].toString().toLowerCase();
                    if (newOrder === 'asc') {
                        return x.localeCompare(y);
                    } else {
                        return y.localeCompare(x);
                    }
                }
            } else {
                console.error('Error: Undefined header')
                return null;
            }
        });

        dispatch(setBodyTable(sortedBody));
    }

    const getHeaderClass = (id: string) => {
        if (sortOrder && sortOrder.id === id) {
            return `sortable ${sortOrder.order}`;
        }
        return 'sortable';
    };

    return (<tr className={'header'}>
        {header.length > 0
            ? header.map((payload: Header) => {
                return <th className={getHeaderClass(payload.id)} id={payload.id} key={payload.id + Math.random().toString(16).slice(2)} onClick={(e: MouseEvent<HTMLTableHeaderCellElement>) => handleTri(e, payload.id)}>{payload.label}</th>
            })
            : null}
    </tr>
    );
};

export default Tri;
