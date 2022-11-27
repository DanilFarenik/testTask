import { useState } from "react";
import { useEffect } from "react";

import "./Clock.scss";

const getTimeToUTC = () => {
  const dateUTC = new Date().toUTCString();

  return {
    date: dateUTC.slice(0, 16),
    time: dateUTC.slice(17, 25)
  }
}

const Clock: React.FC = () => {
  const [clock, setClock] = useState(getTimeToUTC());

  useEffect(() => {
    setInterval(() => {
      setClock(getTimeToUTC());
    }, 1000)
  }, [])

  return (
    <div className="date">
      <b>Current UTC time: {clock.time} </b>
      <p>{clock.date}</p>
    </div>
  )
}

export default Clock;