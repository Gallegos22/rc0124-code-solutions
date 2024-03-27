import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa6';

export function StopWatch() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0); // state variable is the number of seconds , setter function is holding the number of seconds
  const [activeInterval, setActiveInterval] = useState<NodeJS.Timeout>(); // state variable is the interval ID , setter function is holding interval ID
  const [clicked, setClicked] = useState(false);

  function incrementCounter() {
    setElapsedSeconds((prev) => prev + 1), 1000;
  }

  function startTimer() {
    const id = setInterval(incrementCounter, 1000); // setInterval is a method that runs a function every set amount of seconds
    setActiveInterval(id); // we need the id to know what number we want to reset
  }

  function startClick() {
    // when we click play we increment elapsed seconds.
    startTimer();
    // change icon to pause to play
    setClicked(true);
  }

  function stopClick() {
    // clearInterval()
  }

  // when click stop icon make timer pause (create function)

  return (
    <>
      {elapsedSeconds}
      {clicked ? <FaPause /> : <FaPlay onClick={startClick} />}
    </>
  );
}

// Use clear interval to stop the timer
// when we click on the icon if there is an interval cancel it, if there isn't one start it
// READ UP ON SET INTERVAL AND CLEAR INTERVAL To create new Function
