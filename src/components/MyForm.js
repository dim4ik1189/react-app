import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';
import Back from "./Back";

export default class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            firstName: '',
            lastName: '',
            middleName: '',
            fullName: '',
            days: [],
            day: '',
            months: [],
            month: '',
            years: [],
            year: '',
            selectedWeekDay: ''
        };
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.functionFillingArrays = this.functionFillingArrays.bind(this);
        // this.onInputChange = this.onInputChange.bind(this);
    }

    async componentDidMount() {
        await this.fillArrays();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            fullName : `${this.state.firstName} ${this.state.middleName} ${this.state.lastName}`
        })
    };

    onInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    fillArrays = async () => {
        this.functionFillingArrays('Day');
        this.functionFillingArrays('Month');
        this.functionFillingArrays('Year');
    };

    functionFillingArrays = date => {
        const fillingHelper = (startNum, endNum) => {
            let resSet = new Set();

            for(let i = startNum; i <= endNum; i++) {
                resSet.add(i)
            }
            return Array.from(resSet);
        };

        let startNum;
        let endNum;

        const DATE = new Date();
        if(date === 'Day') {
            startNum = 1;
            endNum = 31;
            let days = fillingHelper(startNum, endNum);

            this.setState(prevState => ({
                days: prevState.days.concat(days),
                day: DATE.getDate()
            }));
        }

        if(date === 'Month') {
            startNum = 1;
            endNum = 12;
            let months = fillingHelper(startNum, endNum);

            this.setState(prevState => ({
                months: prevState.months.concat(months),
                month: (DATE.getMonth()) + 1
            }));
        }

        if(date === 'Year') {
            const fullYear = DATE.getFullYear();
            startNum = fullYear - 90;
            endNum = fullYear;
            let years = fillingHelper(startNum, endNum);

            this.setState(prevState => ({
                years: prevState.years.concat(years),
                year: DATE.getFullYear()
            }));
        }
    };

    render () {
        const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const days = this.state.days.map((day, index) => (<option key={index}>{day}</option>));
        const months = this.state.months.map((month, index) => (<option key={index}>{month}</option>));
        const years = this.state.years.map((year, index) => (<option key={index}>{year}</option>));
        const weekDay =  weekDays[new Date(this.state.year, this.state.month - 1, this.state.day).getDay()];

        return (
            <Container>
                <Back />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <p>First Name: { this.state.firstName }</p>
                        <p>Middle Name: { this.state.middleName }</p>
                        <p>Last Name: { this.state.lastName }</p>

                        <Input type="text" name="firstName" onChange={this.onInputChange} value={ this.state.firstName }/>
                        <br />

                        <Input type="text" name="middleName" onChange={this.onInputChange} value={ this.state.middleName }/>
                        <br />

                        <Input type="text" name="lastName" onChange={this.onInputChange} value={ this.state.lastName }/>
                        <br />

                        <p>Full Name:  { this.state.fullName }</p>
                        <Button color="info" type="submit">Submit</Button>
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="day" value={this.state.day} onChange={this.onInputChange}>
                            { days }
                        </Input>
                        <br />

                        <Input type="select" name="month" value={this.state.month} onChange={this.onInputChange}>
                            { months }
                        </Input>
                        <br />

                        <Input type="select" name="year" value={this.state.year} onChange={this.onInputChange}>
                            { years }
                        </Input>
                        <br />

                        <p> { weekDay }</p>

                    </FormGroup>
                </Form>
            </Container>
        )
    }
}