import React from "react";

export function Win({win, oldTurno, restartGame}){

    return(
        <>
            {win === 'WIN' &&
            <section className='winner'>
                <h1>{oldTurno} is the Winner</h1>
                <button onClick={(restartGame)}>Restart</button>
            </section>
            }
            {win === 'Finish' &&
                <section className='winner'>
                    <h1>EMPATE</h1>
                    <button onClick={(restartGame)}>Restart</button>
                </section>
            }
        </>
    )
}