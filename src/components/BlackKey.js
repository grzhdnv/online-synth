import React, { useState } from 'react'
import playSynth from '../utils/tone'

const BlackKey = props => {
  const [active, setActive] = useState(false)

  const handlePointerDown = e => {
    setActive(true)
    playSynth(props.data)
    console.log(props.data)
  }

  const handlePointerEnter = e => {
    if (props.gliss) {
      setActive(true)
      playSynth(props.data)
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
      onPointerDown={() => handlePointerDown()}
      onPointerUp={() => setActive(false)}
      onPointerEnter={() => handlePointerEnter()}
      onPointerLeave={() => setActive(false)}
    ></rect>
  )
}

export default BlackKey
