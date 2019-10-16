import React from 'react';
import { Button } from 'reactstrap';

const TableRow = ({ row, removeName }) => (
    <tr>
        <td key={row.id}>{row.id}</td>
        <td key={row.name}>{row.name}</td>
        <td key={row.lastName}>{row.lastName}</td>
        <td key={row.age}>{row.age}</td>
        <td><Button color="danger" onClick={removeName}>Delete</Button></td>
    </tr>
);

export default TableRow;