import * as Tone from 'tone'

const synth = new Tone.AMSynth().toDestination()
function playSynth() {
  synth.triggerAttackRelease('C4', '8n')
}

export default playSynth
