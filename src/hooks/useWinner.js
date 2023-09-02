import { checkWin } from "../services/win-empate"
import { useState } from "react"

export function useWinner({board}){
    const [win, setWin]=useState()
    const evaluateWin = (board) => setWin(()=>{
        console.log(board)
        const winner = (checkWin(board))
        if (winner === 'WIN') return 'WIN'
        if (winner === 'finish') return 'Finish'
    })
    const restartWin = () => setWin(null)

    console.log(win)
    return {win, evaluateWin, restartWin}
}