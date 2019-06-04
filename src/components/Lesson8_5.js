import React, { Component, Fragment } from 'react';
import Back from './Back';
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";

class Lesson8_5 extends Component {
    state = {
        users: [
            {name: 'Коля', surname: 'Иванов', age: 30, allowEdit: false},
            {name: 'Вася', surname: 'Петров', age: 40, allowEdit: false},
            {name: 'Петя', surname: 'Сидоров', age: 50, allowEdit: false},
        ],
    };

    onInputChange = (event, index) => {
        let textContent = event.currentTarget.textContent.replace(/ +/g, ' ');
        const [name, surname] = textContent.split(' ');

        let users = [...this.state.users];

        users[index].name = name;
        users[index].surname = surname;
        users[index].allowEdit = !users[index].allowEdit;
        this.setState({
            users
        })
    };

    allowEdit = (index) => {
        let users = [...this.state.users];
        users[index].allowEdit = !users[index].allowEdit;

        this.setState({
            users
        });
    };

    onEnter = (event, index) => {
        if(event.which === 13) {
            // this.allowEdit(index);
            this.onInputChange(event, index)
        }
    };

    render() {
        const users = this.state.users.map((user, index) => {
            const style = user.allowEdit ? {fontStyle: 'italic', backgroundColor: '#FFFDE7' } : { color: 'black', display: "flex", alignItems: 'baseline' };
            return <ListGroup key={index} className="mb-2">
                <ListGroupItem
                    style={style}
                    contentEditable={user.allowEdit}
                    id={user.name}
                    onBlur={event => { this.onInputChange(event, index) }}
                    onKeyPress={event => { this.onEnter(event, index) }}>
                    <p>{ user.name } {user.surname}</p>
                    { !user.allowEdit && <Button className="ml-2" color="primary" onClick={() => this.allowEdit(index)}>Edit</Button> }
                </ListGroupItem>
            </ListGroup>
        });

        return (
            <Container>
                <Back />
                { users }
            </Container>
        )
    }
}

export default Lesson8_5;