import React, { Component } from 'react';
import Back from './Back';
import { ListGroup, ListGroupItem, Input, Container } from "reactstrap";
import contentEditable from '../helpers/contentEditable'

class Lesson8_6 extends Component {
    state = {
        users: [
            {name: 'Коля', surname: 'Иванов', age: 30, allowEdit: true},
            {name: 'Вася', surname: 'Петров', age: 40, allowEdit: true},
            {name: 'Петя', surname: 'Сидоров', age: 50, allowEdit: false},
        ],
    };

    onInputChange = event => {
        console.log(event.target);
        let users = [...this.state.users];
        const { name, value } = event.target;

        const [ user ] = users.filter(user => user.name === name);
        let index = users.indexOf(user);

        user.name = value;
        users.splice(index, 1, user);

        this.setState({
            users
        })
    };

    render() {
        const EditableLI = contentEditable('h2');
        const users = this.state.users.map((user, index) => (
            <ListGroup key={index}>
                <EditableLI value={user.name}/>
            </ListGroup>
        ));

        return (
            <Container>

                <Back />
                { users }
            </Container>
        )
    }
}

export default Lesson8_6;