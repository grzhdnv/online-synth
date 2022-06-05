import { useEffect, useState } from 'react'
import './App.css'
import Piano from './components/Piano'
import playSynth from './utils/tone'
import { bayanLayout } from './utils/keyboardLayouts'
import { fullKeyboard } from './utils/pianoArray'

function App() {
  const [pressedKeys, setPressedKeys] = useState([])

  const handleKeyDown = e => {
    if (e.repeat) return

    const key = e.key
    const keyElement = document.querySelector(`[data-key='${bayanLayout[key]}']`)

    if (bayanLayout[key]) {
      setPressedKeys(prevState => [...prevState, bayanLayout[key]])
    }

    playSynth(bayanLayout[key])
    if (keyElement) {
      keyElement.classList.add('active')
    }
  }

  const handleKeyUp = e => {
    const key = e.key
    const keyElement = document.querySelector(`[data-key='${bayanLayout[key]}']`)

    const button = bayanLayout[key]
    if (pressedKeys.includes(button)) {
      const index = pressedKeys.indexOf(button)
      setPressedKeys(prevState => [
        ...prevState.slice(0, index),
        ...prevState.slice(index + 1, prevState.length)
      ])
    }

    if (keyElement) {
      keyElement.classList.remove('active')
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    }
  })

  const chord = pressedKeys
    .sort((a, b) => fullKeyboard.indexOf(a) - fullKeyboard.indexOf(b))
    .join(' - ')

  return (
    <>
      <div className="App">
        <Piano chord={chord} />
        <div id="todo">
          <ul>
            <h3>TODO:</h3>
            {/* <li>Keyboard range slider</li> */}
            <li>Piano keys layout</li>
            <li>Chord display</li>
            <li>Temperament selection</li>
            <li>Sustain on key down</li>
            <li>Pedal on Spacebar</li>
            <li>Synth selection</li>
            <li>Keyboard scroll</li>
            <li>Shift octave change</li>
            <li>Notes engraving</li>
          </ul>
          <ul>
            <h3>Known bugs:</h3>
            <li>Second keydown effect fires for the second key when two keys played legato</li>
            <li>Mobile select on long tap</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
