import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ListGroup, ListGroupItem, Container} from 'reactstrap';
import '../styles/App.css';
import Back from './Back'

class FormComponents extends Component {
    state = {
        textarea: 'Hello',
        checked: true,
        cities: [
            {name: 'Chisinau', population: 523341},
            {name: 'Istanbul', population: 49999444},
            {name: 'Copenhagen', population: 1235555341},
            {name: 'Bern', population: 1266663341},
        ],
        city: '',
        radio: '',
        texts: [],
        text: '',
        colors: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
        color: '',
        checkedValues: ['Not Checked', 'Checked'],
        checkedVal: '',
        checkedBool: false,
        selList: ['', 1, 2, 3],
        sel: '',
        options: [],
        option: '',
        inputBoolean: false
    };

    onInputChange = event => { //input and checkbox change
        const { name } = event.target;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState({
            [name]: value
        })
    };

    onRadioChange = event => {
        this.setState({
            radio: event.target.value
        })
    };

    addTextToList = () => {
        if(!this.state.text) {
            return;
        }

        const text = this.state.text;

        this.setState(prevState => ({
            texts: prevState.texts.concat([text]),
            text: ''
        }))
    };

    removeTextFromTheList = index => {
        this.setState(prevState => ({
            texts: prevState.texts.filter((_, i) => i !== index)
        }))
    };

    handleSelectChange = (event) => {
        const { name, value } = event.target;
        const checkedBool = value === "Checked";

        this.setState({
            [name]: value,
            checkedBool
        });
    };

    addOptionToOptions = () => {
        const option = this.state.option;

        this.setState(prevState => ({
            options: prevState.options.concat([ option ]),
            option: ''
        }))
    };

    render() {
        const cities = this.state.cities.map((city, index) => <option key={index}>{city.name} with {city.population}</option>);

        let textList;
        if(this.state.texts.length) {
            textList = this.state.texts.map((text, index) => {
                return <ListGroup key={index}>
                    <ListGroupItem>
                        {text}
                        <Button className="ml-5" onClick={() => this.removeTextFromTheList(index)}>Remove</Button>
                    </ListGroupItem>
                </ListGroup>
            })
        }

        const colors = this.state.colors.map((color, index) => <option value={color} key={index}>{color}</option>);
        const checkedVals = this.state.checkedValues.map((value, index) => <option key={index}>{value}</option>);
        
        let selText;
        
        switch (this.state.sel) {
            case '1':
                selText = <p>Number 1</p>;
            break;
            case '2':
                selText = <p>Number 2</p>;
            break;
            case '3':
                selText = <p>Number 3</p>;
            break;
            default:
                selText = <p>Please select a number</p>
        }
        const selList = this.state.selList.map((value, index) => (<option key={index}>{value}</option>));
        const options = this.state.options.map((value, index) => (<option key={index}>{ value }</option>));

        return (
            <Container>
                <Back />
                <Form>
                    <FormGroup>
                        <Input type="select"
                               name="city"
                               value={this.state.city}
                               onChange={this.onInputChange}>
                            {cities}
                        </Input>
                        <p>You selected {this.state.city}</p>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <FormText color="danger">{this.state.textarea}</FormText>
                        <Input type="textarea" onChange={this.onInputChange} name="textarea" value={this.state.textarea} />
                    </FormGroup>
                    <FormGroup check>
                        <Label>
                            <Input type="checkbox" checked={this.state.checked} name="checked" onChange={this.onInputChange}/>
                            {this.state.checked ? 'checked' : 'not checked'}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" value="radio1" checked={this.state.radio === 'radio1'} onChange={this.onRadioChange}/>
                            Option 1
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" value="radio2" checked={this.state.radio === 'radio2'} onChange={this.onRadioChange}/>
                            Option 2
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" value="radio3" checked={this.state.radio === 'radio3'} onChange={this.onRadioChange}/>
                            Option 3
                        </Label>
                        <Input type="text" disabled value={this.state.radio}/>
                        <hr/>
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Input type="textarea" name="text" value={this.state.text} onChange={this.onInputChange}/>
                        <Button className="mt-2" onClick={this.addTextToList}>Add text to the list</Button>
                        <hr/>
                        {textList}
                        <hr/>
                    </FormGroup>
                    <br />

                    <FormGroup>
                        <Input type="select" value={this.state.color} name="color" onChange={this.onInputChange}>
                            {colors}
                        </Input>
                        {
                            this.state.color && <Button className="mt-2" color={this.state.color} disabled> The button </Button>
                        }
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" value={this.state.checkedVal} name="checkedVal" onChange={this.handleSelectChange}>
                            { checkedVals }
                        </Input>
                        <Label check>
                            <Input type="checkbox" checked={this.state.checkedBool} disabled/>
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" value={this.state.sel} name="sel" onChange={this.onInputChange}>
                            { selList }
                        </Input>
                        <div>{ selText }</div>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" className="mb-2">
                            { options }
                        </Input>
                        <Input type="text" placeholder="Add option to the options list" className="mb-2" value={this.state.option} name="option" onChange={this.onInputChange}/>
                        <Button onClick={this.addOptionToOptions}>Add text to select</Button>
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" value={this.state.inputBoolean} disabled={!this.state.checked} name="inputBoolean" onChange={this.onInputChange}/>
                        <Input type="checkbox" checked={this.state.inputBoolean} name="inputBoolean" onChange={this.onInputChange}/>
                    </FormGroup>
                </Form>
            </Container>
        )
    }
}

export default FormComponents;