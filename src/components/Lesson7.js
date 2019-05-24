import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Container} from 'reactstrap';
import CheckBox from './CheckBox'
import Back from './Back'

class Lesson7 extends Component {
    constructor() {
        super();
        this.state = {
            cars: ['BMW', 'Honda', 'Vaz', 'Nissan'],
            BMW: false,
            Honda: false,
            Vaz: false,
            Nissan: false
        };
    }

    handleCheckBoxChange = event => {
        const { name } = event.target;

        this.setState(prevState => ({
            [name]: !prevState[name]
        }))
    };

    render() {
        const cars = this.state.cars.map((car, index) => {
            let decoration;
            if(!this.state[car]) {
                decoration = {
                    textDecoration: 'line-through'
                };
            } else {
                decoration = {
                    textDecoration: 'none'
                }
            }
            return <ListGroup key={index}>
                    <ListGroupItem>
                        <CheckBox
                            label={car}
                            isSelected={this.state[car]}
                            decoration={decoration}
                            onCheckBoxChange={this.handleCheckBoxChange}
                            key={car}
                        />
                    </ListGroupItem>
                </ListGroup>

        });
        return (
            <Container>
                <Back />
                {
                    cars
                }
            </Container>
        )
    }
}

export default Lesson7;