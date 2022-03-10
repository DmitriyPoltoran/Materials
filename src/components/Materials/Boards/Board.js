import classes from './Board.module.css'

const Board = (props) => {

   
  return (
    <li className={classes.board}>
      <h2>{props.name}</h2>
      <h3>{props.article}</h3>
      <h3>{props.length}</h3>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <h3>{props.bredd}</h3>
      <h3>{props.price1}</h3>
      <h3>{props.price2}</h3>
    </li>
  );
};

export default Board;