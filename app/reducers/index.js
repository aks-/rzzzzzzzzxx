'use strict'

const defaultState = {
  lapStartedAt: 0,
  totalTimeSinceStartUp: 0,
  totalLapTime: 0,
  paused: false,
  laps: []
}

const timerApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_TIMER': {
      return {
        ...state,
        lapStartedAt: new Date().getTime(),
      }
    }
    case 'ADD_LAP': {
      return {
        ...state,
        laps: state.laps.concat([{
          start: action.start,
          stop: action.stop,
          totalTime: state.totalTimeSinceStartUp +
        (action.stop - action.start)
        }]),
        lapStartedAt: new Date().getTime(),
        totalTimeSinceStartUp: state.totalTimeSinceStartUp +
        (action.stop - action.start) 
      }
    }
    case 'STOP_TIMER': {
      return {
        ...state,
        paused: true,
        totalTimeSinceStartUp: state.totalTimeSinceStartUp +
        (action.stop - action.start),
        totalLapTime: state.totalLapTime +
        (action.stop - action.start)
      }
    }
    case 'RESUME_TIMER': {
      return {
        ...state,
        paused: false,
      }
    }
    case 'RESET_TIMER': {
      return defaultState
    }
    default:
      return state
  }
}

export default timerApp
