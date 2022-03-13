import classes from './BoardsList.module.css'
import Board from './Board';
const BoardsList = (props) => {
  return (
    <ul className={classes["boards-list"]}>
      {props.boards.map((board) => (
        <Board
          key={board.id}
          name={board.name}
          article={board.article}
          length={board.length}
          price={board.price}
          secondPrice = {board.secondPrice}
          bredd={board.bredd}
          price1={board.price1}
          price2={board.price2}
        />))}
    </ul>
  );
};

export default BoardsList;
