  
import React, { useState, useEffect } from 'react';

const AlarmClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmTime, setAlarmTime] = useState('');
  const [alarmActive, setAlarmActive] = useState(false);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    if (alarmActive) {
      const alarmTimeObj = new Date(alarmTime);
      const currentTimeObj = new Date();

      if (
        currentTimeObj.getHours() === alarmTimeObj.getHours() &&
        currentTimeObj.getMinutes() === alarmTimeObj.getMinutes() &&
        currentTimeObj.getSeconds() === alarmTimeObj.getSeconds()
      ) {
        alert('Wake up! It\'s time!');
        setAlarmActive(false); // Turn off the alarm after it rings
      }
    }
  }, [alarmActive, alarmTime, currentTime]);

  const handleSetAlarm = () => {
    setAlarmActive(true);
  };

  return (
    <div>
      <h1>‼‼‼ 😈 HARM ALARM 😈 ‼‼‼</h1>  
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
      <label>
        Set Alarm Time:
        <input
          type="time"
          value={alarmTime}
          onChange={(e) => setAlarmTime(e.target.value)}
        />
      </label>
      <button onClick={handleSetAlarm}>Set Alarm</button>
    </div>
  );
};

export default AlarmClock;

