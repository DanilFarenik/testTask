import { useMemo } from "react";
import { satelliteAPI } from "../../services/SatelliteService";

import Loading from "../loading";
import ListItem from "./listItem";

import "./List.scss";

const List: React.FC = () => {
  const { data, error, isLoading } = satelliteAPI.useFetchPeopleQuery('');

  const people = useMemo(() => {
    if (!data?.people) return null;

    return data.people.filter(item => item.craft === "ISS")
  }, [data])

  return (
    <div className="list">
      <ul className="list__people">
        {isLoading && <Loading />}
        {error && "error API loading"}
        {people && people.map((person, index) => <ListItem key={index + "list"} {...person} />)}
      </ul>
      <div>
        <p className="list__amount">
          total amount: {people?.length || "NaN"} people on ISS
        </p>
      </div>
    </div>
  )
}

export default List;