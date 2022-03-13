import classes from './Board.module.css'
import board_img from '../../../assets/building_boards.jpg';


const Board = (props) => {

   
  return (
    <li className={classes.board}>
      <img src={board_img} alt="board_img" />
      <h2>{props.name}</h2>
        <table>
          <tr>
            <td><h3>article</h3></td>
            <td><h3>{props.article}</h3></td>
          </tr>
          <tr>
            <td><h3>length</h3></td>
            <td><h3>{props.length}</h3></td>
          </tr>
          <tr>
            <td><h3>bredd</h3></td>
            <td> <h3>{props.bredd}</h3></td>
          </tr>
          <tr>
            <td><h3>price 1</h3></td>
            <td><h3>{props.price}</h3><h3>{props.price1}</h3></td>
          </tr>
          <tr>
            <td><h3>price 2</h3></td>
            <td><h3>{props.secondPrice}</h3><h3>{props.price2}</h3></td>
          </tr>

        </table>

      {/* <h3>{props.article}</h3>
      <h3>{props.length}</h3>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
      <h3>{props.bredd}</h3>
      <h3>{props.price1}</h3>
      <h3>{props.price2}</h3> */}
    </li>
  );
};

export default Board;