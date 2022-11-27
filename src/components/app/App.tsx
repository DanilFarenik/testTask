import { satelliteAPI } from "../../services/SatelliteService";

import Location from "../location";
import Map from "../map";
import Clock from "../clock";
import List from "../list";

import "./App.scss";
import { useEffect } from "react";

const App: React.FC = () => {
  const { refetch } = satelliteAPI.useFetchLocationQuery('');

  useEffect(() => {
    setInterval(() => refetch(), 5000)
  }, [])

  return (
    <main className="app">
      <Location />
      <Map />
      <Clock />
      <List />
    </main>
  )
}

export default App;
