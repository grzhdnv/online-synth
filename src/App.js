import Piano from './components/Piano'
import './App.css'
import { useEffect } from 'react'
import playSynth from './utils/tone'

const keyboardBayan = {
  q: 'C3',
  a: 'C#3',
  z: 'D3',
  w: 'D#3',
  s: 'E3',
  x: 'F3',
  e: 'F#3',
  d: 'G3',
  c: 'G#3',
  r: 'A3',
  f: 'A#3',
  v: 'B3',
  t: 'C4',
  g: 'C#4',
  b: 'D4',
  y: 'D#4',
  h: 'E4',
  n: 'F4',
  u: 'F#4',
  j: 'G4',
  m: 'G#4',
  i: 'A4',
  k: 'A#4',
  ',': 'B4',
  o: 'C5',
  l: 'C#5',
  '.': 'D5',
  p: 'D#5',
  ';': 'E5',
  '/': 'F5',
  '[': 'F#5',
  "'": 'G5'
}

const handleKeyDown = e => {
  if (e.repeat) return
  const key = e.key
  console.log(key)
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

function App() {
  useEffect(() => {
    console.log('adding effects')
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      console.log('removing effect')
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
          <li>Keyboard range selection</li>
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
