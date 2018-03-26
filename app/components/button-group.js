import React, { Component } from 'react'

const ButtonGroup = ({
  paused,
  lapStartedAt,
  startTimer,
  addLap,
  stopTimer,
  resumeTimer,
  resetTimer
}) => {
  let StartButton = '',
    StopLapButton = '',
    ResetResumeButton = ''
  if ((!paused) && lapStartedAt === 0) {
    StartButton = <button onClick={() => {console.log('this run');startTimer()}}>Start</button>
  }

  if (!paused && lapStartedAt > 0) {
    StopLapButton = <div>
      <button onClick={() => {stopTimer(lapStartedAt)}}>Stop</button>
      <button onClick={() => {addLap(lapStartedAt)}}>Lap</button>
    </div>
  }

  if (paused) {
    ResetResumeButton = <div>
      <button onClick={() => {resumeTimer()}}>Resume</button>
      <button onClick={() => {resetTimer()}}>Reset</button>
    </div>
  }

  return (
    <div>
      {StartButton}
      {StopLapButton}
      {ResetResumeButton}
    </div>
  )
}

export default ButtonGroup
