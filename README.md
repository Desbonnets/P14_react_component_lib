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
    startDate: '9/3/2006',
    department: 'Marketing',
    dateOfBirth: '12/26/1997',
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
  ...
];

const employeesHeader = [
    {id: 'firstName', label: 'First Name'},
    {id: 'lastName', label: 'Last Name'},
    {id: 'startDate', label: 'Start Date'},
    {id: 'department', label: 'Department'},
    {id: 'dateOfBirth', label: 'Date of Birth'},
    {id: 'street', label: 'Street'},
    {id: 'city', label: 'City'},
    {id: 'state', label: 'State'},
    {id: 'zipCode', label: 'Zip Code'}
]
```

We can then use the component as follows:

```jsx
import Table from 'p14-react-data-tables'

<Table
  data={employeesList}
  header={employeesHeader}
  enableSearch={true}
/>
```