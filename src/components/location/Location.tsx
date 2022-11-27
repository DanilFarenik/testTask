import { satelliteAPI } from "../../services/SatelliteService";

import Loading from "../loading/Loading";

import "./Location.scss";

const Location: React.FC = () => {
  const { data, error, isLoading } = satelliteAPI.useFetchLocationQuery('');


  return (
    <div className="location">
      <b>ISS is now location at:</b>
      {isLoading && <Loading />}
      {error && <p>error API loading</p>}
      {data && !error && <p>longitude: {data.iss_position.longitude}, latitude: {data.iss_position.latitude}</p>}
    </div>
  )
}

export default Location;