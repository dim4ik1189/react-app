import React, { Component } from 'react';
import { Button, Input, Container} from 'reactstrap';
import Back from './Back'

import '../styles/Animations.css';

class MagicEightBall extends Component {
    state = {
        userInput: '',
        randomIndex: ''
    };

    ask = () => {
        if(this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            })
        }
    };

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    };

    render() {
        const possibleAnswers = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomIndex];
        const alignCenter = {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        };
        const font = {
            fontFamily: "Courier New",
            fontSize: "40px"
        };
        return (
            <Container>
                <Back />
                <Container style={alignCenter} className="mt-5 col-12">
                    <Input className="col-6"
                           placeholder="Your question?"
                           type="text"
                           value={this.state.userInput}
                           onChange={this.handleChange}/>
                    <Button color="primary" className="col-2 mt-3" onClick={this.ask}>Ask the Magic ball</Button>
                    <br/>
                    <h2 style={font}> {answer} </h2>
                </Container>
            </Container>
        );
    }
}

export default MagicEightBall;