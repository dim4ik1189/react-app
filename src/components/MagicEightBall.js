import React, { Component } from 'react';
import { Button, Input, Container} from 'reactstrap';
import Back from './Back';

import { CSSTransition } from "react-transition-group";
import '../styles/Animations.css';

class MagicEightBall extends Component {
    state = {
        userInput: '',
        randomIndex: '',
        showAnswer: false
    };

    ask = () => {
        if(this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: '',
                showAnswer: true
            });

            this.switchShowAnswer();
        }
    };

    switchShowAnswer = () => {
        setTimeout(() => {
            this.setState(state => ({
                showAnswer: !state.showAnswer
            }))
        }, 1500)
    };

    handleChange = (event) => {
        this.setState({
            userInput: event.target.value
        })
    };

    render() {
        const { customProps: possibleAnswers } = this.props;
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
                           placeholder="Only Yes / No questions"
                           type="text"
                           value={this.state.userInput}
                           onChange={this.handleChange}/>
                    <Button color="primary" className="col-2 mt-3" onClick={this.ask}>Ask the Magic ball</Button>
                    <br/>
                    <CSSTransition
                        in={this.state.showAnswer}
                        timeout={500}
                        classNames="item"
                        unmountOnExit
                        appear>
                        <h2 style={font}> {answer} </h2>
                    </CSSTransition>
                </Container>
            </Container>
        );
    }
}

export default MagicEightBall;