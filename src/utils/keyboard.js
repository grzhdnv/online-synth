import Range from '@tonaljs/range'

export default function createPianoKeyboard(startingNote, endingNote) {
  const pianoKeys = Range.chromatic([`${startingNote}`, `${endingNote}`])
  return pianoKeys
}
