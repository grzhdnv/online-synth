import { useEffect, useState } from 'react'
import './App.css'
import { Select } from '@mantine/core'
import Piano from './components/Piano'
import playSynth from './utils/tone'
import { bayanLayout, pianoLayout, pianoSimple } from './utils/keyboardLayouts'
// import { fullKeyboard } from './utils/pianoArray'

function App() {
  // const [pressedKeys, setPressedKeys] = useState([])
  const [value, setValue] = useState('Piano')
  const [layout, setLayout] = useState(pianoLayout)
  const [range, setRange] = useState([16, 34])

  const valueToLayout = { Piano: pianoLayout, Bayan: bayanLayout, 'Piano (simple)': pianoSimple }

  const setSelect = e => {
    setValue(e)
    setLayout(valueToLayout[e])
    /*     if (e === 'bayanLayout') {
      setLayout(() => bayanLayout)
    } else if (e === 'pianoLayout') {
      setLayout(pianoLayout)
    } else if (e === 'pianoSimple') {
      setLayout(pianoSimple)
    } */
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

  // WHY IT TRIGGERS FOR EVERY KEYBOARD EVENT?! (when without [])
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
        <Piano range={range} />
        <Select
          value={value}
          onChange={e => setSelect(e)}
          data={['Piano', 'Piano (simple)', 'Bayan']}
          label="Keyboard layout"
        />
      </div>
    </>
  )
}

export default App
