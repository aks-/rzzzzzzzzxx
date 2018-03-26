'use strict'

import { connect } from 'react-redux'
import ButtonGroup from '../components/button-group'
import { startTimer, addLap, stopTimer, resumeTimer, resetTimer } from '../actions'

const mapStateToProps = state => ({
  lapStartedAt: state.lapStartedAt,
  paused: state.paused
})

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  addLap: lapStartedAt => dispatch(addLap(lapStartedAt)),
  stopTimer: lapStartedAt => dispatch(stopTimer(lapStartedAt)),
  resumeTimer: () => dispatch(resumeTimer()),
  resetTimer: () => dispatch(resetTimer())
})

const ButtonGroupContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonGroup)

export default ButtonGroupContainer
