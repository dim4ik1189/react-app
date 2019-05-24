import React, { Component } from 'react';
import { Table, Container, Alert } from "reactstrap";
import Back from './Back'
import TableRowv2 from './TableRowv2'

class Lesson8_2 extends Component {
    constructor() {
        super();
        this.state = {
            employees: [
                {name: 'Коля', surname: 'Иванов', salary: 3000, check: true},
                {name: 'Вася', surname: 'Петров', salary: 4000, check: true},
                {name: 'Петя', surname: 'Сидоров', salary: 5000, check: true},
            ]
        }
    }

    handleCheckBoxChange = index => {
        let employees = [...this.state.employees];
        employees[index].check = !employees[index].check;
        this.setState({
            employees
        })
    };

    render () {
        const capitalize = {
            textTransform: 'capitalize'
        };
        const userObjKeys = this.state.employees && Object.keys(this.state.employees[0]);
        const tableHead = userObjKeys.map(header => (<th style={capitalize}>{ header }</th>));

        const tableBody  = this.state.employees.map((employee, index) => (
            <TableRowv2
                onCheckBoxChange={() => this.handleCheckBoxChange(index)}
                key={index}
                row={employee}
            />));

        const sum = this.state.employees.reduce((acc, val) => {
            if(val.check) {
                acc += +val.salary
            }
            return acc;
        }, 0);

        return (
            <Container>
                <Back />
                <Table>
                    <thead><tr>{ tableHead }</tr></thead>
                    <tbody>{ tableBody }</tbody>
                </Table>
                <Alert color="success">{ sum }</Alert>
            </Container>
        )
    }
}

export default Lesson8_2;