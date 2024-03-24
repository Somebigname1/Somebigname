import React, { useState, useEffect } from 'react';

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <div>
      <p>Current Date and Time:</p>
      <p>{dateTime.toLocaleString()}</p>
    </div>
  );
}

export default DateTimeDisplay;
