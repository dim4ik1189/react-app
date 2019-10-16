import React, { useState } from 'react';
import {
    Container, Button, ListGroup, ListGroupItem
} from 'reactstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import '../styles/Animations.css';
import Back from "./Back";

const HrefList = () => {
    const [hrefs, setHrefs] = useState([
        {href: 'lesson-7', text: 'Урок 7'},
        {href: 'lesson8_2', text: 'Урок 8_2'},
        {href: 'lesson8_3', text: 'Урок 8_3'},
    ]);

    const removeSelfItem = index => {
        setHrefs(
            hrefs.filter((_, i) => i !== index)
        )
    };

    const addHrefToList = () => {
        const length = hrefs.length + (+new Date()).toString().split('').slice(-6, -1).join('');

        setHrefs([
            ...hrefs,
            {
                href: `${length}.html`,
                text: `ссылка ${length}`,
            }
        ]);

    };

    const list = hrefs.map((obj, index) => (
        <CSSTransition
            key={index}
            timeout={500}
            classNames="item"
        >
            <ListGroupItem key={index}>
                <Button className="mr-2" color="danger" onClick={() => removeSelfItem(index)}>&times;</Button>
                <a href={obj.href}>{obj.text}</a>
            </ListGroupItem>
        </CSSTransition>
        )
    );

    return (
        <Container>
            <Back />
            <ListGroup>
                <TransitionGroup>
                    { list }
                </TransitionGroup>
            </ListGroup>
            <Button onClick={addHrefToList} className="mt-3" color="primary">Add href to list</Button>
        </Container>
    )
};

export default HrefList;