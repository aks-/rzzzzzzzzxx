'use strict'

import { connect } from 'react-redux'
import LapTimer from '../components/lap-timer'

const mapStateToProps = state => ({
  totalLapTime: state.totalLapTime,
  lapStartedAt: state.lapStartedAt,
  paused: state.paused
})

const LapTimerContainer = connect(mapStateToProps)(LapTimer)

export default LapTimerContainer
