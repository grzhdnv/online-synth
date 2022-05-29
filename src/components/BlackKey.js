import React, { useState } from 'react'

const BlackKey = props => {
  const [active, setActive] = useState(false)

  const handleMouseEnter = e => {
    if (props.gliss) {
      setActive(true)
    }
  }

  return (
    <rect
      className={active ? 'black-key active' : 'black-key'}
      data-key={props.data}
      width={props.width}
      height={props.height}
      x={props.x}
      rx="10"
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => setActive(false)}
    ></rect>
  )
}

export default BlackKey
