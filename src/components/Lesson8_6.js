import React, { Component } from 'react';
import Back from './Back';
import MailBox from './MailBox'
import { ListGroup, ListGroupItem, Input, Container } from "reactstrap";
import contentEditable from '../helpers/contentEditable'

class Lesson8_6 extends Component {
    state = {
        show: false
    };

    showMessages = () => {
        this.setState(state => ({
            show: !state.show
        }))
    };

    render() {
        const {customProps: messages} = this.props;
        const EditableLI = contentEditable('h2');
        const show = this.state.show;
        let messageList;

        if(show) {
            messageList = messages.map((value, index) => (
                <ListGroupItem key={index}>
                    <ListGroup>
                        <EditableLI value={value}/>
                    </ListGroup>
                </ListGroupItem>
            ))
        }
        return (
            <Container>
                <Back />
                <MailBox messagesLength={messages.length}
                         showMessages={this.showMessages}
                         show={show}/>
                { messageList }
            </Container>
        )
    }
}

export default Lesson8_6;