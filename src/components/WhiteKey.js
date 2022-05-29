import React from 'react'

const WhiteKey = props => {
  return (
    <rect
      className="white-key"
      id={props.id}
      width={props.width}
      height={props.height}
      x={props.x}
      rx="10"
      style={{ stroke: '#555555', fill: '#fffff7' }}
    ></rect>
  )
}

export default WhiteKey
