import React, { useState } from 'react'

const WhiteKey = props => {
  const [active, setActive] = useState(false)

  return (
    <rect
      className={active ? 'white-key active' : 'white-key'}
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

export default WhiteKey
