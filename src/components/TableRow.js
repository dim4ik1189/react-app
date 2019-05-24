import React from 'react';
import { Button } from 'reactstrap';

const TableRow = ({ row, removeName }) => (
    <tr>
        <td contentEditable="true" key={row.id}>{row.id}</td>
        <td contentEditable="true" key={row.name}>{row.name}</td>
        <td contentEditable="true" key={row.age}>{row.age}</td>
        <td><Button color="danger" onClick={removeName}>Delete</Button></td>
    </tr>
);

export default TableRow;