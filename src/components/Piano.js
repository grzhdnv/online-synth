import React, { useState } from 'react'
// import { detect } from '@tonaljs/chord-detect'
import { Box } from '@mantine/core'
import { RangeSlider } from '@mantine/core'
import KeyboardSVG from './KeyboardSVG'
import { whiteKeysFull } from '../utils/pianoArray'

const Piano = () => {
  const [range, setRange] = useState([16, 34])

  const indexWhiteKeyMap = { ...whiteKeysFull }

  const marks = []
  whiteKeysFull.forEach((key, index) => {
    if (key[0] === 'C' || key === 'A0') {
      marks.push({ value: index, label: key })
    }
  })

  // props:
  const startKey = indexWhiteKeyMap[range[0]]
  const endKey = indexWhiteKeyMap[range[1]]
  // const detectedChord = detect(chord).join(' - ')

  return (
    <>
      <Box id="sliderContainer">
        <RangeSlider
          color="dark"
          size="xl"
          min={0}
          max={51}
          minRange={7}
          precision={0}
          value={range}
          label={value => `${indexWhiteKeyMap[value]}`}
          onChange={setRange}
          marks={marks}
        />
        {/*         <h4>
          Piano range:&nbsp;
          <em>
            {fullKeyboard.indexOf(indexWhiteKeyMap[range[1]]) -
              fullKeyboard.indexOf(indexWhiteKeyMap[range[0]]) +
              1}
            &nbsp;keys
          </em>
        </h4> */}
        {/* <h2 id="chords">Chord: {chord}</h2> */}
      </Box>
      <KeyboardSVG startKey={startKey} endKey={endKey} />
    </>
  )
}

export default Piano
