import React from 'react';
import DataTable from './lib/components/DataTable';

function App() {

    let headerExemple = [
        { id: 'firstName', label: 'First Name', type: 'string' },
        { id: 'lastName', label: 'Last Name', type: 'string' },
        { id: 'startDate', label: 'Start Date', type: 'string' },
        { id: 'department', label: 'Department', type: 'date' },
        { id: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
        { id: 'street', label: 'Street', type: 'string' },
        { id: 'city', label: 'City', type: 'string' },
        { id: 'state', label: 'State', type: 'string' },
        { id: 'zipCode', label: 'Zip Code', type: 'string' }
    ];

    let dataExemple = [
        {
            firstName: 'Dupont',
            lastName: 'Alain',
            startDate: '7/2/2024',
            department: 'Department0',
            dateOfBirth: '1/11/2000',
            street: 'Street0',
            city: 'City0',
            state: 'State0',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Dupont',
            lastName: 'Alain',
            startDate: '7/27/2024',
            department: 'Department1',
            dateOfBirth: '2/11/2000',
            street: 'Street1',
            city: 'City1',
            state: 'State1',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Toto',
            lastName: 'Alain',
            startDate: '2/8/2028',
            department: 'Department2',
            dateOfBirth: '12/11/2005',
            street: 'Street2',
            city: 'City2',
            state: 'State2',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Elijah',
            lastName: 'Larsen',
            startDate: '9/3/2006',
            department: 'Marketing',
            dateOfBirth: '6/12/1997',
            street: 'Chambers Alley',
            city: 'Bridgeport',
            state: 'Tennessee',
            zipCode: '53584',
        },
        {
            firstName: 'John',
            lastName: 'Donovan',
            startDate: '9/1/2006',
            department: 'Sales',
            dateOfBirth: '7/17/1976',
            street: 'Monroe Tunnel',
            city: 'San Antonio',
            state: 'Florida',
            zipCode: '10494',
        },
    ];

    return (
        <div>
            <DataTable data={dataExemple} header={headerExemple} enableSearch={true} />
        </div>
    )
}

export default App