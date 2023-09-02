export function checkWin (board) {
    let flagWin
    /*horizontal check*/
    for(let i = 0; i < board.length; i=i+3){
        if(board[i] !== null){
            if(board[i] === board[i+1] && board[i] === board[i+2] ){
                flagWin = 'WIN'
                break
            }
        }
    }
    if(flagWin === 'WIN') return flagWin
    /*Vertical check*/
    for(let i = 0; i<3; i++){
        if(board[i] !== null){
            if(board[i] === board[i+3] && board[i] === board[i+6] ){
                flagWin = 'WIN'
                break
            }
        }
    }
    if(flagWin === 'WIN') return flagWin
    /*diagoanl check*/
    if(board[0] !== null){
        if(board[0] === board[4] && board[0] === board[8] ){
            flagWin = 'WIN'
        }
    }

    if(flagWin === 'WIN') return flagWin
    /*diagoanl check*/
    if(board[2] !== null){
        if(board[2] === board[4] && board[0] === board[6] ){
            flagWin = 'WIN'
        }
    }

    if(flagWin === 'WIN') return flagWin
    for(var i = 0; i<board.length;i++){
        if(board[i] === null){
            break
        }
        console.log(i)
        if(i === 8) flagWin = 'finish'
        console.log(flagWin)
    }
    
    if(flagWin === 'finish') return flagWin

    return 'NO WIN'

}
