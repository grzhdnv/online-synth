import * as Tone from 'tone'

const synth = new Tone.AMSynth().toDestination()
function playSynth(note) {
  synth.triggerAttackRelease(note, '8n')
}

export default playSynth
