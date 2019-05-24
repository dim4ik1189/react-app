import React, { Component, Fragment } from 'react';
import Back from './Back';
import { ListGroup, ListGroupItem, Input } from "reactstrap";

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
        // let users = [...this.state.users];
        // const { name, value } = event.target;

        // const [ user ] = users.filter(user => user.name === name);
        // let index = users.indexOf(user);
        //
        // user.name = value;
        // users.splice(index, 1, user);
        //
        // this.setState({
        //     users
        // })
    };

    render() {
        const users = this.state.users.map((user, index) => (

        ));

        return (
            <Fragment>
                <Back />
                { users }
            </Fragment>
        )
    }
}

export default Lesson8_6;