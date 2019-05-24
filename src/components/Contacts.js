import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Contacts = ({ contacts }) => (
    <div>
        <h1>Contact list</h1>
        {contacts.map((contact, index) => (
            <Card key={index}>
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
    </div>
);

export default Contacts;