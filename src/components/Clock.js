import React, { Component } from 'react';
import {Container} from 'reactstrap';
import '../styles/Clock.css';
import Back from './Back';

export default class Clock extends Component {
    state = {
        seconds: '',
        minutes: '',
        hours: '',
        transition: ' '
    };

    componentDidMount() {
        this.tick();
        this.timerId = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    tick = () => {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = minutes / 60 * 360 + seconds / 60 * 6 + 90;
        const hoursDegrees = hours / 12 * 360 + minutes / 60 * 30 + 90;

        if(secondsDegrees === 90) {
            this.setState({
                transition: "none"
            })
        }

        this.setState({
            seconds: secondsDegrees,
            minutes: minutesDegrees,
            hours: hoursDegrees
        })
    };

    render() {
        return (
            <Container>
                <Back />
                <div className="clock">
                    <div className="clock-face">
                        <div className="hand hour-hand" style={{transform: `rotate(${this.state.hours}deg)`, transition: this.state.transition}}/>
                        <div className="hand minute-hand" style={{transform: `rotate(${this.state.minutes}deg)`, transition: this.state.transition}}/>
                        <div className="hand seconds-hand" style={{transform: `rotate(${this.state.seconds}deg)`, transition: this.state.transition}}/>
                    </div>

                    <div>
                        <ol>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                            <li className="clock-numbers"></li>
                        </ol>

                    </div>
                </div>
            </Container>
        )
    }
}