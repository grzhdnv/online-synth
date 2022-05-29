import React from 'react'

const BlackKey = props => {
  return (
    <rect
      className="black-key"
      id={props.id}
      width={props.width}
      height={props.height}
      x={props.x}
      rx="10"
      style={{ stroke: '#979797', fill: '#4b4b4b' }}
    ></rect>
  )
}

export default BlackKey
