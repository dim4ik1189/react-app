import React, { Component } from 'react';
import TableRow from './TableRow'
import {Container, Button, FormGroup, Input, Table, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Back from "./Back";

class UsersTable extends Component {
    state = {
        users: [
            {name: 'Коля', age: 30, id: 1},
            {name: 'Вася', age: 40, id: 2},
            {name: 'Петя', age: 50, id: 3},
        ],
        name: '',
        age: '',
        modal: false,
    };

    onInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    addUserToUsers = () => {
        const name = this.state.name;
        const age = this.state.age;

        if(!name || !age) {
            return;
        }

        this.setState(state => ({
            users: state.users.concat([{
                name,
                age,
                id: state.users.length + 1
            }]),
            name: '',
            age: '',
            modal: !state.modal
        }))
    };

    removeName = index => {
        this.setState(prevState => ({
            users: prevState.users.filter((_, i) => i !== index)
        }))
    };

    toggleModal = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    };

    render() {
        return (
            <Container>
                <Back />
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Adding user
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input type="text" placeholder="First name" name="name" value={this.state.name} onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" placeholder="Age" name="age" value={this.state.age} onChange={this.onInputChange}/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                            <Button onClick={this.addUserToUsers} color="primary">Add user to the table</Button>
                            <Button onClick={this.toggleModal} color="secondary">Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>First name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((row, index) => <TableRow key={index} row={row} removeName={() => this.removeName(index)}/>)
                        }
                    </tbody>
                </Table>
                <Button color="info" onClick={this.toggleModal}>Add user</Button>
            </Container>
        )
    }
}


export default UsersTable;
