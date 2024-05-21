import React from 'react'
import "../../assets/styles/Project2048/Block.css"
import { getColors } from './Functions'

const Block = (props) => {
  return (
    <div className='block'
    style={{ color: props.num !==0 ? "#645B52" : "#F7F4EF",
      background: getColors(props.num),
      fontSize: (props.num < 128 ? 45 : (props.num < 1024 ? 40 : 35))
    }}>
      {/* {props.num} */}
      {props.num!==0 ? props.num : ""}
    </div>
  )
}

const Grid = (props) => {
  return (
    <div className='grid'>
        {props.data.map((row, rowIndex) => {
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

export default Grid