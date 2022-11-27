import { People } from "../../../type";

import "./ListItem.scss";

const ListItem: React.FC<People> = ({ name }) => {
  return (
    <li className="list-item">
      <img className="list-item__icon" src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="icon" />
      <p className="list-item__name">{name}</p>
    </li>
  )
}


export default ListItem;