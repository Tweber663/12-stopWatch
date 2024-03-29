import { useState } from "react";
import { useEffect } from "react";
import Button from "./button/button";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [formatTime, setFormatTime] = useState('00:00:00.000');

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) formatMilliseconds(time);
  })

  const formatMilliseconds = () => {
    // Convert milliseconds to hours, minutes, seconds, and milliseconds
    let hours = Math.floor(time / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / 1000);
    let ms = time % 1000;

    // Ensure leading zero if needed
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    ms = String(ms).padStart(3, '0');

    setFormatTime(`${hours}:${minutes}:${seconds}.${ms}`)
  };

  const start = () => {
    setIsRunning(true);
  };
  
  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setTime(0);
    setFormatTime('00:00:00.000')
    setIsRunning(false);
  };

  return (
    <div>
      <h1>{formatTime}</h1>
      {/* <button onClick={start}>Start</button> */}
      <Button func={start}>START</Button> 
      <Button func={stop}>STOP</Button> 
      <Button func={reset}>FINISH</Button> 
    </div>
  );
};

export default Timer;