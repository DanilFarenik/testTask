import { useLoadScript } from "@react-google-maps/api"

import Loading from "../loading";
import InitMap from "./initMap";

import "./Map.scss";

const Map: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY as string
  })

  return (
    <>
      {isLoaded ? <InitMap /> : <Loading />}
    </>
  )
}



export default Map;