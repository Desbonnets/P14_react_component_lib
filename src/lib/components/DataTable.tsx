import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../index.css';
import Table from './Table';
import Header, { verifierModeleHeaderArray } from '../modelisations/Header';

interface DataTableProps {
    enableSearch?: boolean;
    enablePagination?: boolean;
    data: Array<any>;
    // header: Array<{ id: string; label: string; type: string }>;
    header: Header[];
}

const DataTable: React.FC<DataTableProps> = ({ data = null, header, enableSearch = false, enablePagination = false }) => {

    const [valideParam, setValideParam] = useState<boolean>(false);

    useEffect(() => {
        if (verifierModeleHeaderArray(header)) {
            setValideParam(true);
        } else {
            setValideParam(false);
            console.error('Error: header invalide');
        }
    }, [header]);

    return (
        <Provider store={store}>
            {valideParam ? <Table data={data} header={header} enableSearch={enableSearch} enablePagination={enablePagination} ></Table> : null}
            {/* <Table data={data} header={header} enableSearch={enableSearch} ></Table> */}
        </Provider>
    )
};

export default DataTable;