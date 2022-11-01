import React from "react";
import "./App.css";
import {
  enemyBoardData,
  addTilePositionToEmptyBoard,
} from "./utils/generateBattleShipTable";
import { GameGrid } from "./components/GameGrid";
import { ScoreBoard } from "./components/ScoreBoard";

function App() {
  const [playerBoard, setPlayerBoard] = React.useState([]);
  const [enemyBoard, setEnemyBoard] = React.useState([]);

  React.useMemo(() => {
    setPlayerBoard(addTilePositionToEmptyBoard());
    setEnemyBoard(enemyBoardData());
  }, []);

  const fire = (position) => { 
    const updatedEnemyBoard = enemyBoard.map((row) => {
        return row.map((tile) => {
            if (tile.position === position && tile.ship) {
                return {
                    ...tile,
                    hit: true,
                    fired: true,
                }
            } else if (tile.position === position) {
                return {
                    ...tile,
                    fired: true,
                    hit: false,
                    miss: true,
                }
            }
            return tile;
        })
    })
    const updatedPlayerBoard = playerBoard.map((row) => {
        return row.map((tile) => {
            if (tile.position === position) {
                return {
                    ...tile,
                    fired: true,
                }

            }
            return tile;
        })
    })
    setPlayerBoard(updatedPlayerBoard);
    setEnemyBoard(updatedEnemyBoard);
}

  return (
    <div className="App">
      <h1>Battle Ship</h1>
      <ScoreBoard enemyBoard={enemyBoard} />
      <GameGrid enemyBoard={enemyBoard} fire={fire} playerBoard={playerBoard} />
    </div>
  );
}

export default App;
