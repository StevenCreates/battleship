const Carrier = 5;
const Battleship = 4;
const Cruiser = 3;
const Submarine = 3;
const Destroyer = 2;

const ships = [
  { name: "Carrier", size: Carrier },
  { name: "Battleship", size: Battleship },
  { name: "Cruiser", size: Cruiser },
  { name: "Submarine", size: Submarine },
  { name: "Destroyer", size: Destroyer },
];

const yPositions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const emptyBoard = Array.from(Array(10), () =>
  new Array(10).fill({
    ship: false,
    fired: false,
    miss: false,
    shipName: "",
  })
);

export const addTilePositionToEmptyBoard = () => {
  return emptyBoard.map((row, rowIndex) => {
    return row.map((tile, tileIndex) => {
      return {
        ...tile,
        position: `${yPositions[rowIndex]}${tileIndex + 1}`,
      };
    });
  });
};

export const enemyBoardData = () => {
    const board = addTilePositionToEmptyBoard();
    ships.forEach(function (ship) {
        let randomRow = Math.floor(Math.random() * 10);
        let randomColumn = Math.floor(Math.random() * 10);
        let randomDirection = Math.floor(Math.random() * 2);
        let shipLength = ship.size;
        let shipName = ship.name;
        let shipPlaced = false;
        while (!shipPlaced) {
            if (randomDirection === 0) {
                if (randomColumn + shipLength > 10) {
                    randomColumn = Math.floor(Math.random() * 10);
                } else {
                    for (let i = 0; i < shipLength; i++) {
                        if (board[randomRow][randomColumn + i].ship) {
                            randomRow = Math.floor(Math.random() * 10);
                            randomColumn = Math.floor(Math.random() * 10);
                            break;
                        } else if (i === shipLength - 1) {
                            for (let j = 0; j < shipLength; j++) {
                                board[randomRow][randomColumn + j].ship = true;
                                board[randomRow][randomColumn + j].shipName = shipName;
                            }
                            shipPlaced = true;
                        }
                    }
                }
            } else {


                if (randomRow + shipLength > 10) {
                    randomRow = Math.floor(Math.random() * 10);
                } else {
                    for (let i = 0; i < shipLength; i++) {
                        if (board[randomRow + i][randomColumn].ship) {
                            randomRow = Math.floor(Math.random() * 10);
                            randomColumn = Math.floor(Math.random() * 10);
                            break;
                        } else if (i === shipLength - 1) {
                            for (let j = 0; j < shipLength; j++) {
                                board[randomRow + j][randomColumn].ship = true;
                                board[randomRow + j][randomColumn].shipName = shipName;
                            }
                            shipPlaced = true;
                        }
                    }
                }
            }
        }
    });
    return board;
};

export const checkIfShipIsSunkBasedOffOfShipsArray = (board) => {
    const shipNames = ships.map((ship) => ship.name);
    const shipsSunk = shipNames.filter((shipName) => {
        const shipTiles = board.flat().filter((tile) => tile.shipName === shipName);
        const shipTilesHit = shipTiles.filter((tile) => tile.hit);
        return shipTiles.length === shipTilesHit.length;
    });
    return shipsSunk;
    }

