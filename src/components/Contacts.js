import React, { Fragment } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Container } from 'reactstrap';
import '../styles/Contacts.css'

const customCard = {
    minWidth: '20em',
    backgroundColor: 'rgba(255, 255, 255, 0.7)'
};

const Contacts = ({contacts, onDragStart, onDragOver, onDragEnd}) =>  (
        <Fragment>
            <h1>Contact list</h1>
            <Container className="positionCard">
                {
                    contacts.map((contact, index) => (
                        <Card key={index} style={customCard} className="mb-3" onDragOver={() => onDragOver(index)}>
                            <CardBody
                                className='drag'
                                draggable
                                onDragStart={e => onDragStart(e, index)}
                                onDragEnd={onDragEnd}
                            >
                                <CardTitle>
                                    <strong>{ contact.name }</strong>
                                </CardTitle>
                                <CardSubtitle>
                                    <i>{ contact.email }</i>
                                </CardSubtitle>
                                <CardText>
                                    { contact.company.catchPhrase }
                                </CardText>
                            </CardBody>
                        </Card>
                    ))
                }
            </Container>
        </Fragment>
);

export default Contacts;