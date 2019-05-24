import React, { Component, Fragment } from 'react';
import Back from './Back';
import { ListGroup, ListGroupItem, Button } from "reactstrap";

class Lesson8_5 extends Component {
    state = {
        users: [
            {name: 'Коля', surname: 'Иванов', age: 30, allowEdit: false},
            {name: 'Вася', surname: 'Петров', age: 40, allowEdit: false},
            {name: 'Петя', surname: 'Сидоров', age: 50, allowEdit: false},
        ],
    };

    onInputChange = (event, index) => {
        console.log(event.currentTarget);
        let users = [...this.state.users];

        users[index].name = event.currentTarget.textContent;
        users[index].allowEdit = !users[index].allowEdit;
        this.setState({
            users
        })
    };

    allowEdit = index => {
        let users = [...this.state.users];
        users[index].allowEdit = !users[index].allowEdit;

        this.setState({
            users
        })
    };

    onEnter = (event, index) => {
        console.log(event.which);
        if(event.which === 13) {
            this.allowEdit(index)
        }
    };

    render() {
        const users = this.state.users.map((user, index) => {
            const style = user.allowEdit ? { color: 'red', fontStyle: 'italic' } : { color: 'black' };
            return <ListGroup key={index}>
                <ListGroupItem
                    style={style}
                    contentEditable={user.allowEdit}
                    id={user.name}
                    onBlur={event => { this.onInputChange(event, index) }}
                    onKeyPress={event => { this.onEnter(event, index) }}>
                    <p>{ user.name }</p>
                    { !user.allowEdit && <Button className="ml-2" color="primary" onClick={() => this.allowEdit(index)}>Edit</Button> }
                </ListGroupItem>

            </ListGroup>
        });

        return (
            <Fragment>
                <Back />
                { users }
            </Fragment>
        )
    }
}

export default Lesson8_5;