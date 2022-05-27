import { Box } from '@mui/material'

function Piano() {
  // BASE HEIGHT AND WIDTH OF A KEY
  const width = 100
  const height = 300

  // PIANO WITH 12 KEYS
  let pianoKeys = [
    { length: 2 },
    { length: 1 },
    { length: 2 },
    { length: 1 },
    { length: 2 },
    { length: 2 },
    { length: 1 },
    { length: 2 },
    { length: 1 },
    { length: 2 },
    { length: 1 },
    { length: 2 }
  ]

  let itr = -1

  return (
    <>
      {pianoKeys.map(key => {
        if (key.length === 2) {
          itr += 1 //Add 1 to itr if white key
          return <WhiteKey width={width} height={height} x={width * itr} i={itr} />
        } else
          return (
            <BlackKey
              width={width / 1.8}
              height={height / 1.4}
              x={width * (itr + 1) - width / 1.8 / 2}
              i={itr}
            />
          )
      })}
    </>
  )
}

// Ignore this. It's my own defintion of BlackKey and WhiteKey using MUI. x=position of a key in the x-axis
const BlackKey = ({ width, x, i }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        zIndex: '2',
        color: 'white',
        position: 'absolute',
        minHeight: '50px',
        bgcolor: 'black',
        color: 'white',
        minWidth: width,
        left: x
      }}
    >
      {i}
    </Box>
  )
}
const WhiteKey = ({ width, x, i }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        pt: '100px',
        position: 'absolute',
        minHeight: '200px',
        bgcolor: 'grey',
        minWidth: width,
        left: x,
        border: '1px solid #333'
      }}
    >
      {i}
    </Box>
  )
}
export default Piano
