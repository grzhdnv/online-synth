import React, { useState } from 'react'
// import { detect } from '@tonaljs/chord-detect'
import { Box } from '@mantine/core'
import { RangeSlider } from '@mantine/core'
import KeyboardSVG from './KeyboardSVG'
import { whiteKeysFull } from '../utils/pianoArray'

const Piano = ({ chord }) => {
  const [range, setRange] = useState([9, 37])

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
      <Box style={{ width: '90%', margin: '20px auto' }}>
        <RangeSlider
          color="gray"
          size="sm"
          min={0}
          max={51}
          minRange={7}
          precision={0}
          value={range}
          label={value => `${indexWhiteKeyMap[value]}`}
          onChange={setRange}
          marks={marks}
        />
        <h1 id="chords">Chord: {chord}</h1>
      </Box>
      <KeyboardSVG startKey={startKey} endKey={endKey} />
      <div>{startKey + endKey}</div>
    </>
  )
}

export default Piano
