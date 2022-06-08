import { useEffect } from 'react'
import './App.css'
import Piano from './components/Piano'
import playSynth from './utils/tone'
import { bayanLayout } from './utils/keyboardLayouts'
// import { fullKeyboard } from './utils/pianoArray'

function App() {
  // const [pressedKeys, setPressedKeys] = useState([])

  const handleKeyDown = e => {
    if (e.repeat) return
    const key = e.key
    const keyElement = document.querySelector(`[data-key='${bayanLayout[key]}']`)
    // if (bayanLayout[key]) {
    //   setPressedKeys(prevState => [...prevState, bayanLayout[key]])
    // }
    playSynth(bayanLayout[key])
    if (keyElement) {
      keyElement.classList.add('active')
    }
  }

  const handleKeyUp = e => {
    const key = e.key
    const keyElement = document.querySelector(`[data-key='${bayanLayout[key]}']`)
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
  }, [])

  /*   const chord = pressedKeys
    .sort((a, b) => fullKeyboard.indexOf(a) - fullKeyboard.indexOf(b))
    .join(' - ')
 */
  return (
    <>
      <div className="App">
        <Piano />
        {/* <div id="todo">
          <ul>
            <h3>TODO:</h3>
             <li>Piano keys layout</li>
            <li>Chord analyzer</li>
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
            <li>Latest keydown trigered with every previously pressed key keyup effect</li>
            <li>Mobile select on long tap</li>
          </ul>
        </div> */}
      </div>
    </>
  )
}

export default App
