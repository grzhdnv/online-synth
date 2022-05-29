import React from 'react'
import BlackKey from './BlackKey'
import WhiteKey from './WhiteKey'
import { createPianoKeyboardArray, createWhiteKeysArray } from '../utils/pianoArray'

const KeyboardSVG = () => {
  const width = 80
  const height = 400
  const pianoKeys = createPianoKeyboardArray('A0', 'C8')
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
      <p>{whiteKeys}</p>

      <svg
        style={{ margin: '0px' }}
        viewBox={`0 0 ${pianoWidth} ${height}`}
        width="100%"
        xmlns="<http://www.w3.org/2000/svg>"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {whiteKeys.map(key => (
          <WhiteKey
            id={key}
            key={key}
            width={width}
            height={height}
            x={width * whiteKeys.indexOf(key)}
          />
        ))}
        {blackKeysSVG.map(([key, x]) => (
          <BlackKey
            id={key + '#'}
            key={key + '#'}
            width={blackKeyWidth}
            height={blackKeyHeight}
            x={x}
          />
        ))}
      </svg>
      {pianoKeys.length}
    </div>
  )
}

export default KeyboardSVG
