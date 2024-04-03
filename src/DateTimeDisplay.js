import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dayOptions = { weekday: 'long' }; // Specify options to display only the day of the week
  const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' }; // Specify options to display time

  return (
    <div className='current-time'>
      <p>&#123; {dateTime.toLocaleDateString(undefined, dayOptions)}  {dateTime.toLocaleTimeString(undefined, timeOptions)} &#125;</p>
    
    </div>
  );
}

export default DateTimeDisplay;
