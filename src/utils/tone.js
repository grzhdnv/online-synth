import * as Tone from 'tone'

const synth = new Tone.PolySynth(Tone.AMSynth).toDestination()
synth.set({
  harmonicity: 1, // 2 (2 - second oscillator octave higher)
  oscillator: {
    type: 'amsine2',
    modulationType: 'sine',
    harmonicity: 1 //1.01
  },
  envelope: {
    attack: 0.006,
    decay: 4,
    sustain: 0.04,
    release: 2 // 1.2
  },
  modulation: {
    volume: 13,
    type: 'amsine2',
    modulationType: 'sine',
    harmonicity: 12
  },
  modulationEnvelope: {
    attack: 0.006,
    decay: 0.2,
    sustain: 0.2,
    release: 1 //0.4
  }
})

function playSynth(note) {
  synth.triggerAttackRelease(note, '8n')
}

export default playSynth
