import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const countdown = new Date(Date.parse(new Date()) + 14 * 24 * 60 * 60 * 1000);

    const intervalId = setInterval(() => {
      const now = new Date();
      const diff = countdown - now;

      const daysRemaining = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutesRemaining = Math.floor((diff / 1000 / 60) % 60);
      const secondsRemaining = Math.floor((diff / 1000) % 60);

      setDays(daysRemaining <= 9 ? `0${daysRemaining}` : daysRemaining.toString());
      setHours(hoursRemaining <= 9 ? `0${hoursRemaining}` : hoursRemaining.toString());
      setMinutes(minutesRemaining <= 9 ? `0${minutesRemaining}` : minutesRemaining.toString());
      setSeconds(secondsRemaining <= 9 ? `0${secondsRemaining}` : secondsRemaining.toString());

      if (diff <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div className='cards'>
        <div className='card days'>
          <div className='flip-card'>
            {/* <div className='top-half'>{days}</div>
            <div className='bottom-half'>{days}</div> */}
            {days}
          </div>
          <p>Days</p>
        </div>
        <div className='card hours'>
          <div className='flip-card'>
            {/* <div className='top-half'>{hours}</div>
            <div className='bottom-half'>{hours}</div> */}
            {hours}
          </div>
          <p>Hours</p>
        </div>
        <div className='card minutes'>
          <div className='flip-card'>
            {/* <div className='top-half'>{minutes}</div>
            <div className='bottom-half'>{minutes}</div> */}
            {minutes}
          </div>
          <p>Minutes</p>
        </div>
        <div className='card seconds'>
          <div className='flip-card'>
            {/* <div className='top-half'>{seconds}</div> */}
            {/* <div className='bottom-half'>{seconds}</div>     */}
            {seconds}
          </div>
          <p>Seconds</p>
        </div>
      </div>
    </main>
  );
};

export default Countdown;
