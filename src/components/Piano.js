import React, { useState } from 'react'
import { Box } from '@mantine/core'
import { RangeSlider } from '@mantine/core'
import KeyboardSVG from './KeyboardSVG'
import { whiteKeys } from '../utils/pianoArray'

const Piano = () => {
  const [range, setRange] = useState([4, 50])

  const valueMap = { ...whiteKeys }
  const marks = []
  whiteKeys.forEach((key, index) => {
    if (key[0] === 'C' || key === 'A0') {
      marks.push({ value: index, label: key })
    }
  })

  return (
    <>
      <Box style={{ width: '90%', margin: '0 auto' }}>
        <RangeSlider
          color="gray"
          size="sm"
          min={0}
          max={51}
          minRange={7}
          precision={0}
          value={range}
          label={value => `${valueMap[value]}`}
          onChange={setRange}
          marks={marks}
        />
      </Box>
      <div>Piano</div>

      <KeyboardSVG />
    </>
  )
}

export default Piano
