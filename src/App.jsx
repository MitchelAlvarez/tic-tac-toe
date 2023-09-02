import {createRoot} from 'react-dom/client'
import React, { useEffect, useState } from 'react'
import styale from './index.css'
import { Square } from './componentes/Square'
import { TURNS } from './services/turnos'
import { useWinner } from './hooks/useWinner'
import { useBoardTurn } from './hooks/useBoardTest'
import { Win } from './componentes/Win'

export function App() {
    const {board, turno, oldTurno, updateBoard, resetBoardTurn } = useBoardTurn()
    const {win, evaluateWin, restartWin} = useWinner({board})
    
    

    const restartGame = () => {
        console.log('hola')
        restartWin
        resetBoardTurn()       
        localStorage.clear()
    }
        useEffect(()=>{
            evaluateWin(board)
            console.log('entro')
        },[turno])
        console.log(board)
    
    return(
        <main className='board'>
            <h1>TIC-TAC-TOE</h1>
            <section className='game'>
                {
                    board.map((cell, index) =>{
                        return(
                            <Square
                                key={index/*toda lista necesita un key, como map va por cada uno de los arrays para mostrarlo, lo tomamos como una lista en este caso*/}
                                index={index}
                                updateBoard={updateBoard}
                            >
                            {board[index]} 
                        </Square>
                        )
                    })
                }
            </section>
            <section className='turn'>
                <Square isSelected={turno === TURNS.X}>{TURNS.X}</Square> 
                <Square isSelected={turno === TURNS.O}>{TURNS.O}</Square> 
            </section>
            <button onClick={restartGame}>Restart</button>
            <Win win={win} oldTurno={oldTurno} restartGame={restartGame} />          
        </main>
    )
}

export default App