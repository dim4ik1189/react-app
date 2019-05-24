import React, {Component} from 'react';
import {Container, Alert, ListGroup, ListGroupItem} from "reactstrap";
import Back from './Back'
import CheckBox from './CheckBox'

class Lesson8_3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [
                {model: "Saab", check: true},
                {model: "Volvo", check: true},
                {model: "BMW", check: true},
                {model: "Honda", check: true}
            ],
        }
    }

    onCheckBoxChange = event => {
        const cars = [...this.state.cars]; //deep copy of the state
        const [ car ] = cars.filter(car => car.model === event.target.name);
        const carIndex = cars.indexOf(car);

        car.check = !car.check;

        cars.splice(carIndex, 1, car);

        this.setState({
            cars
        })
    };

    render() {
        const cars = this.state.cars.map((car, index) => (
            <ListGroup key={index}>
                <ListGroupItem>
                    <CheckBox
                        label={car.model}
                        isSelected={car.check}
                        onCheckBoxChange={this.onCheckBoxChange}
                    />
                    <Alert color="primary">
                        { car.check && car.model }
                    </Alert>
                </ListGroupItem>
            </ListGroup>
        ));
        return (
            <Container>
                <Back />
                { cars }
            </Container>
        )
    }
}

export default Lesson8_3;