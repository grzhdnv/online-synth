import React from 'react'
import playSynth from '../utils/tone'

const Piano = () => {
  return (
    <>
      <div>Piano</div>
      <button type="button" onClick={() => playSynth()}>
        Play
      </button>
      <div id="piano"></div>
    </>
  )
}

export default Piano
