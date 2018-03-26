'use strict'

import { connect } from 'react-redux'
import MainTimer from '../components/main-timer'

const mapStateToProps = state => ({
  totalTimeSinceStartUp: state.totalTimeSinceStartUp,
  lapStartedAt: state.lapStartedAt,
  paused: state.paused
})

const MainTimerContainer = connect(mapStateToProps)(MainTimer)

export default MainTimerContainer
