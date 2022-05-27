import Range from '@tonaljs/range'

export function createPianoKeyboardArray(startingKey, endingKey) {
  const pianoKeys = Range.chromatic([`${startingKey}`, `${endingKey}`])
  return pianoKeys
}

export function createWhiteKeysArray(keyboardArray) {
  const whiteKeysArray = keyboardArray.filter(key => key.length === 2)
  /*   keyboardArray.forEach((key, i) => {
    if (key.length === 2) {
      whiteKeysArray.push([key, i])
    }
  }) */
  return whiteKeysArray
}
