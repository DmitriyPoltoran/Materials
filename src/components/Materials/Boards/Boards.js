import { useState, Fragment, useCallback, useEffect } from "react";
import BoardsList from "./BoardsList";

const Boards = () => {
  const [boards, setBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBoardsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-1b4c8-default-rtdb.firebaseio.com/Boards.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const loadedBoards = [];
      for (const key in data) {
          loadedBoards.push({
            id: data[key].ProductId,
            article: data[key].ProductArtikle,
            length: data[key].ProductLength,
            name: data[key].ProductName,
            price: data[key].ProductPrice,
            bredd: data[key].ProductBredd,
            price1: data[key].ProductPrice_Ed_izm,
            price2: data[key].ProductComparsionPrice_Ed_izm,
          })
      }
      console.log(data)
    //   const transformedBoards = data.results.map((boardData) => {
    //     return {
    //       id: boardData.ProductId,
    //       article: boardData.ProductArtikle,
    //       length: boardData.ProductLength,
    //       name: boardData.ProductName,
    //       price: boardData.ProductPrice,
    //       bredd: boardData.ProductBredd,
    //       price1: boardData.ProductPrice_Ed_izm,
    //       price2: boardData.ProductComparsionPrice_Ed_izm,
    //     };
    //   });
      setBoards(loadedBoards);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBoardsHandler();
  }, [fetchBoardsHandler]);

  let content = <p>Found no boards.</p>;

  if (boards.length > 0) {
    content = <BoardsList boards={boards} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <Fragment>
        <section>
        <button onClick={fetchBoardsHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </Fragment>
  );
};

export default Boards;
