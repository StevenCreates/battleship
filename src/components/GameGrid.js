import React from 'react'
import {useShipsArrayToUpdateEmptyBoard} from '../utils/generateBattleShipTable'

export const GameGrid = () => {
    const table = useShipsArrayToUpdateEmptyBoard()
    console.log(table)
  return (
    <div>GameGrid</div>
  )
}
