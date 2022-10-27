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

const emptyBoard = Array.from(Array(10), () => new Array(10).fill({
    ship: false,
    fired: false,
    miss: false,
    shipName: "",
}));

export const useShipsArrayToUpdateEmptyBoard = () => {
    const updatedBoard = emptyBoard 
    ships.forEach((ship) => {
        const randomRow = Math.floor(Math.random() * 10);
        const randomColumn = Math.floor(Math.random() * 10);
        const randomDirection = Math.floor(Math.random() * 2);
        const shipSize = ship.size;

        if (randomDirection === 0) {
        for (let i = 0; i < shipSize; i++) {
            if (updatedBoard[randomRow][randomColumn + i]) {
            updatedBoard[randomRow][randomColumn + i] = {
                ship: true,
                fired: false,
                miss: false,
                shipName: ship.name,
            };
            }
        }
        } else {
        for (let i = 0; i < shipSize; i++) {
            if (updatedBoard[randomRow + i][randomColumn]) {
            updatedBoard[randomRow + i][randomColumn] = {
                ship: true,
                fired: false,
                miss: false,
                shipName: ship.name,
            };
            }
        }
        }
    });
    return updatedBoard;
    }
