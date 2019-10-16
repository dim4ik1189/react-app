import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Container} from 'reactstrap';
import Back from './Back'
import Greetings from './Greetings';

const SimpleForm = () => {
    const [form, setForm] = useState({
         firstName: "",
         firstNameError: "",
     });

    const validateName = name => {
        const regex = /[A-Za-z]{3,}/;

        return !regex.test(name)
            ? "The name must contain at least three letters. Numbers and special characters are not allowed."
            : "";
    };

    const onFirstNameBlur = () => {
        const firstNameError = validateName( form.firstName );

        setForm({
            ...form,
            firstNameError
        })
    };

    const onFirstNameChange = event =>
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });

    return (
        <Container>
            <Back/>
            <Form>
                <FormGroup style={{marginBottom: 10}}>
                    <Label>
                        First name:
                        <Input
                            style={{backgroundColor: '#EFEFFF', marginLeft: 10}}
                            type="text"
                            name="firstName"
                            onChange={onFirstNameChange}
                            onBlur={onFirstNameBlur}
                        />
                        {form.firstNameError && <div style={{color: 'red', margin: 5}}>{form.firstNameError}</div>}
                    </Label>
                </FormGroup>

                <Greetings
                    firstName={form.firstName}
                />

            </Form>
        </Container>
    );
};

export default SimpleForm;