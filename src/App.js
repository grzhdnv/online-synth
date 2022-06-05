import { useEffect } from 'react'
import './App.css'
import Piano from './components/Piano'
import playSynth from './utils/tone'
import { keyboardBayan } from './utils/keyboardLayouts'

function App() {
  const handleKeyDown = e => {
    if (e.repeat) return
    const key = e.key
    const keyElement = document.querySelector(`[data-key='${keyboardBayan[key]}']`)

    playSynth(keyboardBayan[key])
    if (keyElement) {
      keyElement.classList.add('active')
    }
  }

  const handleKeyUp = e => {
    const key = e.key
    const keyElement = document.querySelector(`[data-key='${keyboardBayan[key]}']`)
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

  return (
    <>
      <div className="App">Keyboard Synth</div>
      <Piano />
      <div id="todo">
        <ul>
          <h3>TODO:</h3>
          {/* <li>Keyboard range slider</li> */}
          <li>Piano keys layout</li>
          <li>Chord display</li>
          <li>Temperament selection</li>
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
    </>
  )
}

export default App
