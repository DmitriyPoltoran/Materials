import classes from "./MaterialItem.module.css";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import Boards from "./Boards/Boards";

const MaterialItem = (props) => {


  return (
    <Card>
      <li classes={classes.material}>
        <div>
          <h3><Link to={props.href}>{props.name}</Link> </h3>
          {/* <Link to={props.href}><Boards /></Link> */}
        </div>
      </li>
    </Card>
  );
};

export default MaterialItem;
