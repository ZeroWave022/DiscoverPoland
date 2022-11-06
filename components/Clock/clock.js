import React from "react";
import { useState, useEffect } from "react";
import toDisplayableTime from '../../lib/time.js';

import styles from "./clock.module.css";

function Clock({ props }) {
    const initDate = new Date(props.date);
    
    const [time, setTime] = useState(initDate);

    function timeTick() {
      setTime(new Date());
    }

    useEffect(() => {
        let timerID = setInterval(timeTick, 1000);
        
        return function cleanup() {
            clearInterval(timerID);
        }
    }, []);

    return (
        <div className={styles.container}>
            <h2>{toDisplayableTime(time)}</h2>
        </div>
    );
}

export default Clock;
