import React, { MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setBodyTable } from '../features/tableSlice';
import Header from '../modelisations/Header';
import { styled } from 'styled-components';

const Tr = styled.tr`
    background-color: ${(props) => props.theme.colors.colorHeader};
`;

const Th = styled.th`
${(props) => props.theme.colors.colorTh !== '#fff' ? 'border: 1px solid' + props.theme.colors.colorTh : 'border: ' + props.theme.colors.border };
    text-align: left;
    padding: 8px;
`;

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
                    if (a[id] instanceof Date && b[id] instanceof Date) {
                        x = a[id].getTime();
                        y = b[id].getTime();
                    } else {
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

    return (<Tr>
        {header.length > 0
            ? header.map((payload: Header) => {
                return <Th className={getHeaderClass(payload.id)} id={payload.id} key={payload.id + Math.random().toString(16).slice(2)} onClick={(e: MouseEvent<HTMLTableHeaderCellElement>) => handleTri(e, payload.id)}>{payload.label}</Th>
            })
            : null}
    </Tr>
    );
};

export default Tri;
