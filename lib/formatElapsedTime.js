const padFront = x => (`00${x}`).slice(-2)

const padRear = x => (`${x}0`).slice(0, 2)

const roundDecimalPlace = val => Math.ceil(`0.${val}`)

const formatSeconds = seconds => {
  const parts = String(seconds).split('.')

  const formatedPartOne = padFront(parts[0])

  let formatedPartTwo
  if (parts[1]) {
    formatedPartTwo = padRear(roundDecimalPlace(parts[1]))
  } else {
    formatedPartTwo = 0
  }

  return `${formatedPartOne}.${formatedPartTwo}`
}


const formatElapsedTime = ms => {
  if (typeof ms !== 'number')
    return `00:00:00`

  const seconds = (((ms/1000))%60),
    minutes = Math.floor((ms/(1000*60))%60),
    hours = Math.floor((ms/(1000*60*60))%60)

  const formatedSeconds = formatSeconds(seconds)

  return hours < 1 ?
    `${padFront(minutes)}:${formatedSeconds}` :
    `${padFront(hours)}:${padFront(minutes)}:${formatedSeconds}`
}

// if no error is thrown means test passes
const testEqual = (expected, actual) => {
  if (actual != expected)
    throw new Error(`test fails, expected "${expected}" but got "${actual}"`)
}

testEqual('00:00:00', formatElapsedTime('woot'))
testEqual('02:09.10', formatElapsedTime(129100))
testEqual('27:46:40.0', formatElapsedTime(100000000))
