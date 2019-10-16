import React, { useState, useEffect } from 'react';
import {Container} from "reactstrap";
import '../styles/Clock.css';
import Back from "./Back";

const ClockOnHooks = () => {
    const [time, setTime] = useState({});
    const [transition, setTransition] = useState(' ');
    const tick = () => {
        const date = new Date();
        const seconds = date.getSeconds();
        const minutes = date.getMinutes();
        const hours = date.getHours();

        const secondsDegrees = ((seconds / 60) * 360) + 90;
        const minutesDegrees = minutes / 60 * 360 + seconds / 60 * 6 + 90;
        const hoursDegrees = hours / 12 * 360 + minutes / 60 * 30 + 90;

        if(secondsDegrees === 90) {
            setTransition('none')
        }

        setTime({
            seconds: secondsDegrees,
            minutes: minutesDegrees,
            hours: hoursDegrees
        })
    };

    setInterval(tick, 1000);

    return (
        <Container>
            <Back />
            <div className="clock">
                <div className="clock-face">
                    <div className="hand hour-hand" style={{transform: `rotate(${time.hours}deg)`, transition: transition}}/>
                    <div className="hand minute-hand" style={{transform: `rotate(${time.minutes}deg)`, transition: transition}}/>
                    <div className="hand seconds-hand" style={{transform: `rotate(${time.seconds}deg)`, transition: transition}}/>
                </div>
                <div>
                    <ol>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                        <li className="clock-numbers"/>
                    </ol>
                </div>
            </div>
        </Container>
    )
};

export default ClockOnHooks;