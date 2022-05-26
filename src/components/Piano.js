import React from 'react'
import playSynth from '../utils/tone'
import KeyboardSVG from './KeyboardSVG'

const Piano = () => {
  return (
    <>
      <div>Piano</div>
      <button type="button" onClick={() => playSynth()}>
        Play
      </button>
      <KeyboardSVG />
      <div id="piano">End</div>
    </>
  )
}

export default Piano
