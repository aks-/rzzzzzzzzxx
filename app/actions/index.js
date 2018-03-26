'use strict'

export const startTimer = () => ({
  type: 'START_TIMER'
})

export const addLap = (start) => ({
  type: 'ADD_LAP',
  start: start,
  stop: new Date().getTime()
})

export const stopTimer = (start) => ({
  type: 'STOP_TIMER',
  start: start,
  stop: new Date().getTime()
})

export const resumeTimer = () => ({
  type: 'RESUME_TIMER'
})

export const resetTimer = () => ({
  type: 'RESET_TIMER'
})
