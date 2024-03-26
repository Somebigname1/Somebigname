import React, { useState, useEffect } from 'react';

const DateTimeDisplay=()=> {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div className='current-time'>
      {/* <p>Current Date and Time:</p> */}
      <p>&#123;{dateTime.toLocaleString()}&#125;</p>
    </div>
  );
}

export default DateTimeDisplay;
