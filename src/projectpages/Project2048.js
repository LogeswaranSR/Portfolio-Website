import React, { useState } from 'react'
import Block from './Block.js'
import "../assets/styles/Project2048/Project2048.css"

const Project2048 = () => {
    const [data, setData] = useState([
        [2, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 4, 0]
    ])

  return (
    <div className='grid'>
        {data.map((row, rowIndex) => {
            return(
                <div style={{ display: "flex" }} key={rowIndex}>
                    {row.map((val, index) => {
                        return (<Block num={val} key={index} />)
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Project2048