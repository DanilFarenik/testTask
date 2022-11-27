import { useCallback, useMemo } from "react";
import { satelliteAPI } from "../../../services/SatelliteService";

import { GoogleMap, MarkerF } from "@react-google-maps/api";

import { defaultTheme } from "./theme";
import { useRef } from "react";

const defaultOption = {
  mapTypeControl: false,
  scaleControl: false,
  clickableIcons: false,
  disableDefaultUI: true,
  disableDoubleClickZoom: true,
  draggable: false,
  isFractionalZoomEnabled: false,
  rotateControl: false,
  styles: defaultTheme
}

const defaultCenter = { lat: 48.28, lng: 35.01 };

type Map = google.maps.Map;

const InitMap: React.FC = () => {
  const mapRef = useRef<Map>()

  const { data } = satelliteAPI.useFetchLocationQuery('')

  const center = useMemo(() => {
    if (data) return { lat: +data?.iss_position?.latitude, lng: +data?.iss_position?.longitude }

    return defaultCenter;
  }, [data])

  const onLoad = useCallback((map: Map) => { mapRef.current = map }, [])

  const onUnmount = useCallback(() => { mapRef.current = undefined }, [])

  return (
    <GoogleMap
      mapContainerClassName="map"
      zoom={2}
      center={center}
      options={defaultOption}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {data ? <MarkerF position={center} /> : <></>}
    </GoogleMap>
  )
}

export default InitMap;