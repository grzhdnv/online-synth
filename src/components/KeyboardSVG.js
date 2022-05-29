import React, { useState } from 'react'
import BlackKey from './BlackKey'
import WhiteKey from './WhiteKey'
import { createPianoKeyboardArray, createWhiteKeysArray } from '../utils/pianoArray'

const KeyboardSVG = () => {
  const [gliss, setGliss] = useState(false)

  const width = 80
  const height = 400
  const pianoKeys = createPianoKeyboardArray('F1', 'C7')
  const whiteKeys = createWhiteKeysArray(pianoKeys)
  const pianoWidth = whiteKeys.length * width

  const blackKeyWidth = width / 2
  const blackKeyHeight = height / 1.4
  let blackKeyPosX = 0 - blackKeyWidth / 2

  let blackKeysSVG = []
  whiteKeys.forEach(key => {
    if (whiteKeys.indexOf(key) === whiteKeys.length - 1) {
      return
    }

    if (key[0] === 'E' || key[0] === 'B') {
      blackKeyPosX += width
    } else {
      blackKeyPosX += width
      blackKeysSVG.push([key, blackKeyPosX])
    }
  })

  return (
    <div className="keyboard">
      <svg
        viewBox={`0 0 ${pianoWidth} ${height}`}
        width="100%"
        xmlns="<http://www.w3.org/2000/svg>"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onMouseDown={() => setGliss(true)}
        onMouseUp={() => setGliss(false)}
      >
        {whiteKeys.map(key => (
          <WhiteKey
            data={key}
            key={key}
            width={width}
            height={height}
            x={width * whiteKeys.indexOf(key)}
            gliss={gliss}
          />
        ))}
        {blackKeysSVG.map(([key, x]) => (
          <BlackKey
            data={key + '#'}
            key={key + '#'}
            width={blackKeyWidth}
            height={blackKeyHeight}
            x={x}
            gliss={gliss}
          />
        ))}
      </svg>
      {pianoKeys.length}
    </div>
  )
}

export default KeyboardSVG
