import React, { useEffect, useState } from 'react'
import Grid from './Block.js'
import { useSwipeable } from "react-swipeable"
import {reset, SwipeUp, SwipeDown, SwipeLeft, SwipeRight, useEvent, gameOver} from "./Functions.js"
import "../../assets/styles/Project2048/Project2048.css"

const UP_ARROW = 38;
const DOWN_ARROW = 40;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const Project2048 = () => {
    const [data, setData] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ])

    const [GameOver, setGameOver] = useState(false)

    const handleKey = (event) => {
        if(GameOver){
            // alert("Game Over!!")
            return;
        }
        switch(event.keyCode){
            case UP_ARROW:
                // console.log("Before:", data)
                SwipeUp(data, setData);
                // console.log("After:", data)
                break;
            case DOWN_ARROW:
                // console.log("Before:", data)
                SwipeDown(data, setData);
                // console.log("After:", data)
                break;
            case LEFT_ARROW:
                // console.log("Before:", data)
                SwipeLeft(data, setData);
                // console.log("After:", data)
                break;
            case RIGHT_ARROW:
                // console.log("Before:", data)
                SwipeRight(data, setData);
                // console.log("After:", data)
                break;
            default:
                break;
        }

        let Over = gameOver(data)
        if(Over){
            // alert("Game Over!!")
            setGameOver(true);
        }
    }

    const handleSwipe = (direction) => {
        if(GameOver) return;

        let event = {keyCode: null}
        switch(direction){
            case 'Up':
                event.keyCode = UP_ARROW;
                break;
            case 'Down':
                event.keyCode = DOWN_ARROW;
                break;
            case 'Left':
                event.keyCode = LEFT_ARROW;
                break;
            case 'Right':
                event.keyCode = RIGHT_ARROW;
                break;
            default:
                break;
        } 
        handleKey(event);
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('Left'),
        onSwipedRight: () => handleSwipe("Right"),
        onSwipedUp: () => handleSwipe("Up"),
        onSwipedDown: () => handleSwipe("Down"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    }) 

    const ResetButton = () => {
        return (
            <button className='btn-2048' onClick={() => reset(setData, setGameOver)}>New Game</button>
        )
    }

    useEffect(() => {
        reset(setData, setGameOver)
    }, [])

    useEvent('keydown', handleKey)

    return (
        <div className='game-page'>
            <div className='grid-container' {...swipeHandlers}>
                <Grid data={data} />
                {GameOver && <div className='overlay' style={{transition: "0.3s"}}>
                    <p> Game Over!! </p>
                    <ResetButton />
                </div>}
            </div>
            <div className='btn-container'>
                <ResetButton />
            </div>
        </div>
    )
}

export default Project2048