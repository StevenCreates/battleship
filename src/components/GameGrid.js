import React from "react";
import {
  enemyBoardData,
  addTilePositionToEmptyBoard,
} from "../utils/generateBattleShipTable";
import { Tile } from "./Tile";

export const GameGrid = () => {
  const [cheat, setCheat] = React.useState(false);
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
    setEnemyBoard(updatedEnemyBoard);
}

  return (
    <div>
      <h2
        style={{
          marginTop: 8,
          marginBottom: 4,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Enemy Board
      </h2>
      <button
        style={{ margin: 6, background: "#808080", color: "#ffff" }}
        onClick={() => setCheat(!cheat)}
      >
        {cheat ? "Hide Ships" : "Cheat?"}
      </button>

      {enemyBoard.map((row, rowIndex) => {
        return (
          <div
            style={{
              width: "480px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              gridColumnGap: 4,
            }}
            key={rowIndex}
          >
            {row.map((tile) => {
              return (
                <Tile
                  key={tile.position}
                  tileData={tile}
                  isEnemyBoard={true}
                  showShips={cheat}
                />
              );
            })}
          </div>
        );
      })}
      <h2
        style={{
          marginTop: 8,
          marginBottom: 4,
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Player Board
      </h2>
      {playerBoard.map((row, rowIndex) => {
        return (
          <div
            style={{
              width: "480px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(10, 1fr)",
              gridColumnGap: 4,
            }}
            key={rowIndex}
          >
            {row.map((tile) => {
              return (
                <Tile
                  key={tile.position}
                  tileData={tile}
                  isEnemyBoard={false}
                  fire={fire}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
