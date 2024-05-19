import React from 'react'
import "../assets/styles/Project2048/Block.css"

const Block = (props) => {
  return (
    <div className='block'
    style={{color: props.num === 2 || props.num === 4 ? "#645B52" : "#F7F4EF"}}>
        {props.num}
    </div>
  )
}

export default Block