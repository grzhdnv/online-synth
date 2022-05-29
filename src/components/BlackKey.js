import React, { useState } from 'react'

const BlackKey = props => {
  const [active, setActive] = useState(false)

  return (
    <rect
      className={active ? 'black-key active' : 'black-key'}
      id={props.id}
      width={props.width}
      height={props.height}
      x={props.x}
      rx="10"
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
    ></rect>
  )
}

export default BlackKey
