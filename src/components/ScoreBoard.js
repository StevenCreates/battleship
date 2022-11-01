import React from 'react'
import {   checkIfShipIsSunkBasedOffOfShipsArray } from '../utils/generateBattleShipTable'
export const ScoreBoard = ({enemyBoard}) => {
    const sunkShips = checkIfShipIsSunkBasedOffOfShipsArray(enemyBoard);

  return (
    <div>
        <h1>Score Board</h1>
        <p>Ships Sunk: {sunkShips.length}</p>
        <div>
            {sunkShips?.map((ship) => {
                return <p key={ship}>{ship}</p>
            })}
        </div>
    </div>
  )
}
