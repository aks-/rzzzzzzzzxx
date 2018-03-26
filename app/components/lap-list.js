import React, { Fragment } from 'react'
import formatElapsedTime from '../../lib/formatElapsedTime'

const LapList = ({laps}) => {
  const len = laps.length
  if (len === 0) {
    return <Fragment>
      <span></span>
    </Fragment>
  }

  return (<table>{
    laps.reverse().map((lap, i) =>
      <tr>
        <td>{`0${(len - (i+1))}`.slice(-2)}</td>
        <td>{formatElapsedTime(lap.stop - lap.start)}</td>
        <td>{formatElapsedTime(lap.totalTime)}</td>
      </tr>
    )
  }</table>)
}

export default LapList
