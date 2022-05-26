import React from 'react'
import BlackKey from './BlackKey'
import WhiteKey from './WhiteKey'
import { createPianoKeyboardArray, countWhiteKeys } from '../utils/pianoArray'

const KeyboardSVG = () => {
  const width = 80
  const height = 400
  const pianoKeys = createPianoKeyboardArray('A0', 'C8')
  const pianoWidth = countWhiteKeys(pianoKeys) * width
  // const whiteKeys = pianoKeys.filter(key => key.length === 2)
  // const blackKeys = pianoKeys.filter(key => key.length === 3)
  let keysSVG = pianoKeys.map((key, i) =>
    key.length === 2 ? (
      <WhiteKey width={width} height={height} x={width * i} />
    ) : (
      <BlackKey width={width / 1.8} height={height / 1.4} x={width * i - width / 1.8 / 2} />
    )
  )

  return (
    <div className="keyboard" style={{ padding: '0px' }}>
      <svg
        style={{ margin: '0px' }}
        viewBox={`0 0 ${pianoWidth} ${height}`}
        width="100%"
        xmlns="<http://www.w3.org/2000/svg>"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {keysSVG}

        {/*         <WhiteKey width={width} height={height} />
        <BlackKey width={width / 1.8} height={height / 1.4} /> */}
      </svg>
    </div>
  )
}

export default KeyboardSVG
