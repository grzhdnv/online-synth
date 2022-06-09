import { useEffect, useState } from 'react'
import './App.css'
import { Box, RangeSlider, Select } from '@mantine/core'
import playSynth from './utils/tone'
import { bayanLayout, pianoLayout, pianoSimple } from './utils/keyboardLayouts'
import { whiteKeysFull } from './utils/pianoArray'
import KeyboardSVG from './components/KeyboardSVG'
// import { fullKeyboard } from './utils/pianoArray'

function App() {
  // const [pressedKeys, setPressedKeys] = useState([])
  const [value, setValue] = useState('Piano (simple)')
  const [layout, setLayout] = useState(pianoSimple)
  const [range, setRange] = useState([13, 28])

  // For range
  const indexWhiteKeyMap = { ...whiteKeysFull }
  const marks = []
  whiteKeysFull.forEach((key, index) => {
    if (key[0] === 'C' || key === 'A0') {
      marks.push({ value: index, label: key })
    }
  })
  // props from range:
  const startKey = indexWhiteKeyMap[range[0]]
  const endKey = indexWhiteKeyMap[range[1]]

  // Select layout and range maps
  const valueToLayout = { Piano: pianoLayout, Bayan: bayanLayout, 'Piano (simple)': pianoSimple }
  const valueToRange = { Piano: [12, 35], Bayan: [16, 37], 'Piano (simple)': [13, 28] }

  const handleSelect = e => {
    setValue(e)
    setLayout(valueToLayout[e])
    setRange(valueToRange[e])
  }

  const handleKeyDown = e => {
    if (e.repeat) return
    const key = e.key
    const keyElement = document.querySelector(`[data-key='${layout[key]}']`)
    // if (bayanLayout[key]) {
    //   setPressedKeys(prevState => [...prevState, bayanLayout[key]])
    // }
    playSynth(layout[key])
    if (keyElement) {
      keyElement.classList.add('active')
    }
  }

  const handleKeyUp = e => {
    const key = e.key
    const keyElement = document.querySelector(`[data-key='${layout[key]}']`)
    // const button = bayanLayout[key]
    // not sure why it does not work with if
    // if (pressedKeys.includes(button))
    // setPressedKeys(prev => prev.filter(pressed => pressed !== button))
    // }
    if (keyElement) {
      keyElement.classList.remove('active')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false)
    window.addEventListener('keyup', handleKeyUp, false)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [layout])

  /*   const chord = pressedKeys
    .sort((a, b) => fullKeyboard.indexOf(a) - fullKeyboard.indexOf(b))
    .join(' - ')
 */
  return (
    <>
      <div className="App">
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
        </Box>
        <KeyboardSVG startKey={startKey} endKey={endKey} />
        <Box id="selectContainer">
          <Select
            value={value}
            onChange={e => handleSelect(e)}
            data={['Piano', 'Piano (simple)', 'Bayan']}
            label="Keyboard layout"
          />
        </Box>
        {/*         <h4>Piano range:&nbsp;
      <em>
        {fullKeyboard.indexOf(indexWhiteKeyMap[range[1]]) - fullKeyboard.indexOf(indexWhiteKeyMap[range[0]]) + 1}
        &nbsp;keys
      </em></h4> */}
        {/* <h2 id="chords">Chord: {chord}</h2> */}
      </div>
    </>
  )
}

export default App
