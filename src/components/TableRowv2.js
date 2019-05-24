import React from 'react';
import { Input } from 'reactstrap';

const TableRowv2 = ({ row, onCheckBoxChange }) => (
    <tr>
        <td key={row.name}>{row.name}</td>
        <td key={row.surname}>{row.surname}</td>
        <td key={row.salary}>{row.salary}</td>
        <td><Input type="checkbox" name={row.name} checked={row.check} onChange={onCheckBoxChange}/></td>
    </tr>
);

export default TableRowv2;