import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Container } from 'reactstrap';

const positionCard = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
};

const card = {
    minWidth: '20em',
    marginBottom: '3em',
    backgroundColor: 'rgb(173, 252, 230)'
};

const Contacts = ({ contacts }) => (
    <div>
        <h1>Contact list</h1>
        <Container style={positionCard}>
            {contacts.map((contact, index) => (
                <Card
                    id={index}
                    key={index}
                    style={card}
                >
                    <CardBody>
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
            ))}
        </Container>

    </div>
);

export default Contacts;