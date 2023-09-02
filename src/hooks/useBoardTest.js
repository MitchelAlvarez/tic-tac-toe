import { TURNS } from '../services/turnos'
import { useState } from 'react'

export function useBoardTurn(){
    const [board, setBoard] = useState(()=>{
        const boardSotrage = window.localStorage.getItem('board')
        return boardSotrage ? JSON.parse(boardSotrage) : Array(9).fill(null)
    
    })
    const [turno, setTurno] = useState(window.localStorage['turno'] ?? TURNS.X)
    const [oldTurno, setOldTurno] = useState(turno)

    const updateBoard = ({index}) => {
        if(board[index] !== null) return
        board.splice(index,1,turno)//tambien se puede board[index]=turno
        setBoard(board)
        const newTurn =  turno === TURNS.X ? TURNS.O : TURNS.X
        setTurno(newTurn)
        setOldTurno(turno)
        window.localStorage.setItem('board', JSON.stringify(board))
        window.localStorage.setItem('turno', oldTurno) 
    }

    // const resetBoard = () => setBoard(Array(9).fill(null))
    // const resetTurn = () => setTurno(TURNS.X)
    const resetBoardTurn = () =>{
        console.log('hola2')
        setBoard(Array(9).fill(null))
        setTurno(TURNS.X)
    }

    return {board, turno, oldTurno, updateBoard, resetBoardTurn}
}