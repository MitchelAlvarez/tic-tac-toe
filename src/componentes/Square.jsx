import React from "react"
export function Square  ({children, isSelected, updateBoard, index}){
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard({index})
    }

    return(
        <div onClick={handleClick} className={className}>
        {children}
        </div>
    )
}