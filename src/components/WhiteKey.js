import React, { useState } from 'react'

const WhiteKey = props => {
  const [active, setActive] = useState(false)

  const handleMouseEnter = e => {
    if (props.gliss) {
      setActive(true)
    }
  }

  return (
    <rect
      className={active ? 'white-key active' : 'white-key'}
      data-key={props.data}
      width={props.width}
      height={props.height}
      x={props.x}
      rx="12"
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => setActive(false)}
    ></rect>
  )
}

export default WhiteKey
