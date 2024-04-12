import React from 'react';
import DataTable from './lib/components/DataTable';

function App() {

    let headerExemple = [
        { id: 'firstName', label: 'First Name', type: 'string' },
        { id: 'lastName', label: 'Last Name', type: 'string' },
        { id: 'startDate', label: 'Start Date', type: 'date' },
        { id: 'department', label: 'Department', type: 'string' },
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
            startDate: new Date('07/02/2024'),
            department: 'Department0',
            dateOfBirth: new Date('1/11/2000'),
            street: 'Street0',
            city: 'City0',
            state: 'State0',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Dupont',
            lastName: 'Alain',
            startDate: new Date('07/27/2024'),
            department: 'Department1',
            dateOfBirth: new Date('02/11/2000'),
            street: 'Street1',
            city: 'City1',
            state: 'State1',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Toto',
            lastName: 'Alain',
            startDate: new Date('02/08/2028'),
            department: 'Department2',
            dateOfBirth: new Date('12/11/2005'),
            street: 'Street2',
            city: 'City2',
            state: 'State2',
            zipCode: 'azerty156'
        },
        {
            firstName: 'Elijah',
            lastName: 'Larsen',
            startDate: new Date('09/03/2006'),
            department: 'Marketing',
            dateOfBirth: new Date('06/12/1997'),
            street: 'Chambers Alley',
            city: 'Bridgeport',
            state: 'Tennessee',
            zipCode: '53584',
        },
        {
            firstName: 'John',
            lastName: 'Donovan',
            startDate: new Date('09/01/2006'),
            department: 'Sales',
            dateOfBirth: new Date('07/17/1976'),
            street: 'Monroe Tunnel',
            city: 'San Antonio',
            state: 'Florida',
            zipCode: '10494',
        },
    ];

    // Fonction pour générer une date aléatoire dans une fourchette donnée
    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    for (let i = 0; i < 50; i++) {
        const newObj = {
            firstName: 'FirstName' + i,
            lastName: 'LastName' + i,
            startDate: randomDate(new Date('1/1/2024'), new Date()),
            department: 'Department' + i,
            dateOfBirth: randomDate(new Date('1/1/1970'), new Date()),
            street: 'Street' + i,
            city: 'City' + i,
            state: 'State' + i,
            zipCode: 'ZipCode' + i
        };
        // Ajouter le nouvel objet à l'array existant
        dataExemple.push(newObj);
    }

    return (
        <div>
            <h2>Data exemple</h2>
            <DataTable data={dataExemple} header={headerExemple} enableSearch={true} enablePagination={true} />
            <h2>API exemple</h2>
            <DataTable apiData={'https://660d69d86ddfa2943b3457a1.mockapi.io/api/v1/data'} header={headerExemple} enableSearch={true} enablePagination={true} />
        </div>
    )
}

export default App