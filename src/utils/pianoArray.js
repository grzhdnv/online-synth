import Range from '@tonaljs/range'

export const pianoKeys = createPianoKeyboardArray()
export const whiteKeys = createWhiteKeysArray()

export function createPianoKeyboardArray(startingKey = 'A0', endingKey = 'C8') {
  const pianoKeys = Range.chromatic([`${startingKey}`, `${endingKey}`])
  return pianoKeys
}

export function createWhiteKeysArray(keyboardArray = pianoKeys) {
  const whiteKeysArray = keyboardArray.filter(key => key.length === 2)
  return whiteKeysArray
}
