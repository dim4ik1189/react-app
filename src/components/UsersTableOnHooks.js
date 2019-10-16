import React, { useState } from 'react';
import TableRow from './TableRow'
import {Container, Button, FormGroup, Input, Table, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Back from "./Back";

const UsersTableOnHooks = () => {
    const [modal, setModal] = useState(false);
    const [form, setValues] = useState({
        name: '',
        lastName: '',
        age: ''
    });
    const [users, setUsers] = useState([
        {name: 'Dmitrii', lastName: 'Cocorin', age: 30, id: 1}
    ]);

    const [date, setDate] = useState(new Date());
    const tick = () => setDate(new Date());
    setInterval(tick, 1000);

    const updateValues = event => {
      setValues({
          ...form,
          [event.target.name]: event.target.value
      })
    };

    const addUser = () => {
        setUsers([
            ...users,
            {
                name: form.name,
                lastName: form.lastName,
                age: form.age,
                id: Math.floor(Math.random() * 100 - 1)
            }
        ]);
        setValues({
            name: '',
            lastName: '',
            age: ''
        });
        setModal(false);
    };

    const removeName = index => {
      setUsers(
          users.filter((_, i) => i !== index)
      )
    };

    return (
        <Container>
            <Back />
            <div>{date.toLocaleTimeString()}</div>
            <Modal isOpen={modal}>
                <ModalHeader toggle={() => setModal(false)}>
                    Adding user
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Input type="text" name="name" placeholder="First name" value={form.name} onChange={updateValues}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="lastName" placeholder="Last name" value={form.lastName} onChange={updateValues}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="number" name="age" placeholder="Age" value={form.age} onChange={updateValues}/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={addUser} color="primary">Add user to the table</Button>
                    <Button onClick={() => setModal(false)} color="secondary">Cancel</Button>
                </ModalFooter>
            </Modal>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((row, index) => <TableRow key={row.id} row={row} removeName={() => removeName(index)}/>)
                }
                </tbody>
            </Table>
            <Button color="info" onClick={() => setModal(true)}>Add user</Button>
        </Container>
    );
};

export default UsersTableOnHooks;