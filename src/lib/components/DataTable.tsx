import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Table from './Table';

interface DataTableProps {
    enableSearch?: boolean;
    data: Array<any>;
    header: Array<{ id: string; label: string; type: string }>;
}

const DataTable: React.FC<DataTableProps> = ({ data= null, header, enableSearch = false }) => {

    return (
        <Provider store={store}>
            <Table data={data} header={header} enableSearch={enableSearch} ></Table>
        </Provider>
    )
};

export default DataTable;