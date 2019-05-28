import React, {Component} from 'react';
import {
    Container, Button, ListGroup, ListGroupItem
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import '../styles/Animations.css';
import Back from "./Back";

class HrefList extends Component {
    constructor() {
        super();
        this.state = {
            hrefs: [
                {href: 'lesson-7', text: 'Урок 7'},
                {href: 'lesson8_2', text: 'Урок 8_2'},
                {href: 'lesson8_3', text: 'Урок 8_3'},
            ],
        };
    }

    removeSelfItem = index => {
        this.setState(prevState => ({
            hrefs: prevState.hrefs.filter((_, i) => i !== index)
        }))
    };

    addHrefToList = () => {
        const length = this.state.hrefs.length + (+new Date()).toString().split('').slice(-6, -1).join('');

        const href = {
            href: `${length}.html`,
            text: `ссылка ${length}`,
        };

        this.setState(state => ({
            hrefs: state.hrefs.concat([href])
        }))
    };

    render() {
        const list = this.state.hrefs.map((obj, index) => {
            return <CSSTransition
                key={index}
                timeout={500}
                classNames="item"
                >
                    <ListGroupItem key={index}>
                        <Button className="mr-2" color="danger" onClick={() => this.removeSelfItem(index)}>&times;</Button>
                        <a href={obj.href}>{obj.text}</a>
                    </ListGroupItem>
                </CSSTransition>

        });
        return (
            <Container>
                <Back />
                <ListGroup>
                    <TransitionGroup>
                        { list }
                    </TransitionGroup>
                </ListGroup>
                <Button onClick={this.addHrefToList} className="mt-3" color="primary">Add href to list</Button>
            </Container>
        )
    }
}

export default HrefList;