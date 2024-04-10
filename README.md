# React Data Table
This component is an npm package and can be imported as follows: `npm i p14_react_data_tables`

## 1. Description

...

## 2. Example of use

Given the following data array:

```js
const employeesList = [
  {
    firstName: 'Elijah',
    lastName: 'Larsen',
    startDate: new Date('9/3/2006'),
    department: 'Marketing',
    dateOfBirth: new Date('12/26/1997'),
    street: 'Chambers Alley',
    city: 'Bridgeport',
    state: 'Tennessee',
    zipCode: '53584',
  },
  {
    firstName: 'John',
    lastName: 'Donovan',
    startDate: new Date('9/1/2006'),
    department: 'Sales',
    dateOfBirth: new Date('7/17/1976'),
    street: 'Monroe Tunnel',
    city: 'San Antonio',
    state: 'Florida',
    zipCode: '10494',
  },
  ...
];

const employeesHeader = [
    {id: 'firstName', label: 'First Name', type: 'string'},
    {id: 'lastName', label: 'Last Name', type: 'string'},
    {id: 'startDate', label: 'Start Date', type: 'date'},
    {id: 'department', label: 'Department', type: 'string'},
    {id: 'dateOfBirth', label: 'Date of Birth', type: 'date'},
    {id: 'street', label: 'Street', type: 'string'},
    {id: 'city', label: 'City', type: 'string'},
    {id: 'state', label: 'State', type: 'string'},
    {id: 'zipCode', label: 'Zip Code', type: 'string'}
]
```

We can then use the component as follows:

```jsx
import { DataTable } from 'p14-react-data-tables'

<DataTable 
  data={employeesList} 
  header={employeesHeader} 
  enableSearch={true} 
  enablePagination={true} 
/>
```