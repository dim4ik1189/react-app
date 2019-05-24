import React, { Component, Fragment } from 'react';
import { Container } from "reactstrap";
import Back from './Back';
import { ListGroup, ListGroupItem } from "reactstrap";
import CheckBox from "./CheckBox";

class Lesson8_4 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {name: 'Коля', surname: 'Иванов', age: 30, check: true},
                {name: 'Вася', surname: 'Петров', age: 40, check: true},
                {name: 'Петя', surname: 'Сидоров', age: 50, check: true},
            ]
        }
    }

    onCheckBoxChange = index => {
        const users = [...this.state.users];

        users[index].check = !users[index].check;

        this.setState({
            users
        })
    };

    render() {
        const users = this.state.users.map((user, index) => {
            let userData;
            if(user.check) {
                userData = <Fragment> {user.name} {user.surname} {user.age}</Fragment>
            } else {
                userData = <Fragment> {user.name} </Fragment>
            }
            return <ListGroup key={index}>
                <ListGroupItem>
                    { userData }
                    <CheckBox
                        name={user.name}
                        isSelected={user.check}
                        onCheckBoxChange={() => this.onCheckBoxChange(index)}
                    />
                </ListGroupItem>
            </ListGroup>
        });
        return(
            <Container>
                <Back />
                { users }
            </Container>
        )
    }
}

export default Lesson8_4;