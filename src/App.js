import Piano from './components/Piano'
import './App.css'
import { useEffect } from 'react'
import playSynth from './utils/tone'

const keyboardButtons = {
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
  const keyElement = document.querySelector(`[data-key='${keyboardButtons[key]}']`)

  playSynth(keyboardButtons[key])
  if (keyElement) {
    keyElement.classList.add('active')
  }
}

const handleKeyUp = e => {
  const key = e.key
  const keyElement = document.querySelector(`[data-key='${keyboardButtons[key]}']`)
  if (keyElement) {
    keyElement.classList.remove('active')
  }
}

function App() {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <>
      <div className="App">Keyboard Synth</div>
      <Piano />
    </>
  )
}

export default App
